
export const endpoints = {
  home: {
  },
  auth: {
    refreshToken: '/auth/refresh-token',
    sendOtp: '/otps/resend-otp',
    changePassword: '/auth/change-password',
    viewProf: "/clients/profile/get-profile",
    editProf: "/clients/profile/update-profile",
    login: '/otps/resend-otp',
    verifyOTP: '/otps/verify-otp',
    register: '/clients/auth/register',
    Register: {
      send_unregistered_otp: '/auth/send-unregistered-otp',
      verify_new_number_otp: '/auth/verify-unregistered-phone',
      register:'/auth/register'
    },
    Login:{
      send_otp:'/auth/send-otp',
      verify_otp:'/auth/verify-otp'
    },
  },
  Business_Type:{
    list:'/business-types'
  }
};