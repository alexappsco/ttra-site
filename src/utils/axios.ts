import axios from 'axios';
import { HOST_API } from 'src/config-global';
import { useAuthStore } from 'src/auth/auth-store';
import { refreshSession } from 'src/auth/auth-actions';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_API });

//  Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Only set Content-Type to application/json if it's not FormData
    // FormData needs to set its own Content-Type with boundary
    if (!(config.data instanceof FormData)) {
      config.headers['Content-Type'] = 'application/json';
    }

    // Optionally attach access token from store
    const token = useAuthStore.getState().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

//  Response Interceptor with Auto Refresh
let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

function onTokenRefreshed(token: string) {
  refreshSubscribers.forEach((cb) => cb(token));
  refreshSubscribers = [];
}

function addRefreshSubscriber(callback: (token: string) => void) {
  refreshSubscribers.push(callback);
}

axiosInstance.interceptors.response.use(
  (response) => response?.data,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status || 500;

    // 🔐 If access token expired (401) → try to refresh
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        // Wait until refresh is complete
        return new Promise((resolve) => {
          addRefreshSubscriber((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(axiosInstance(originalRequest));
          });
        });
      }

      isRefreshing = true;

      try {
        const newSession = await refreshSession();
        const { accessToken } = newSession;

        // Save to store
        useAuthStore.getState().setSession(newSession);

        onTokenRefreshed(accessToken.value);
        isRefreshing = false;

        // Retry failed request
        originalRequest.headers.Authorization = `Bearer ${accessToken.value}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        isRefreshing = false;
        console.error('Token refresh failed:', refreshError);
        return Promise.reject(refreshError);
      }
    }

    const message = getErrorMessage(error.response?.data);
    return Promise.reject({ message, status });
  }
);

export default axiosInstance;

// ----------------------------------------------------------------------
//  Utility: Error Message Extractor
// ----------------------------------------------------------------------
export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    // eslint-disable-next-line prefer-destructuring
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String((error as any).message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong';
  }
  return message;
};
