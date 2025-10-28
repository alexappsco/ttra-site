
export const paths = {
  // AUTH
  auth: {
    login: '/auth/login',
    forgotPassword: '/auth/forgot-password',
    register: '/auth/register',
    verify: '/auth/verify',
    resetPassword: '/auth/reset-password',
    setlocation: '/auth/set-address'
  },
  // Control Panel
  controlPanel: {
    main: '/',
    profile:{
      viewProfile:'/edit-profile'
    },
    category: {
      list: '/category',
      details: (id: string) => `/category/${id}`,
    },
    subCategories: {
      list: '/categories/sub-categories',
      single: (id: string) => `/sub-categories/${id}`,
    },
    products: {
      list: '/products',
      single: (id: string) => `/product/${id}`,
      new: '/products/new',
    },
    orders: {
      checkout:"/orders/checkout",
      list: '/order',
      single: (id: string) => `/order/${id}`,
    },
    returnOrders: {
      list: '/return-order',
      single: (id: string) => `/return-order/${id}`,
    },
    units: {
      list: '/products/units',
    },
    marketings: {
      root: '/marketings',
      offers: {
        list: '/offers',
        new: '/marketings/offers/new',
        edit: (id: string) => `/marketings/offers/${id}`,
      },
      banners: {
        list: '/marketings/banners',
        single: (id: string) => `/marketings/banners/${id}`,
        new: '/marketings/banners/new',
      },
      barcodeDiscount: {
        list: '/marketings/coupons',
        new: '/marketings/coupons/new',
      },
      notifications: {
        list: '/marketings/notifications',
        new: '/marketings/notifications/new',
      },
    },
    workArea: {
      list: '/work-area',
      single: (id: string) => `/work-area/${id}`,
      new: '/work-area/new',
      edit: (id: string) => `/work-area/${id}`,
    },
    users: {
      root: '/users',
      drivers: {
        list: '/users/drivers',
        driverOrders: (id: string) => `/users/drivers/orders/${id}`,
        edit: (id: string) =>`/users/drivers/edit/${id}`,
        single: (id: string) => `/users/drivers/${id}`,
      },
      clients: {
        list: '/users/clients',
        edit: (id: string) => `/users/clients/edit/${id}`,
        single: (id: string) => `/users/clients/${id}`,
      },
      employee: {
        list: '/users/employee',
        edit: (id: string) => `/users/employee/edit/${id}`,
        register: '/users/employee/register',
        single: (id: string) => `/users/employees/${id}`,
      },
    },
    policy: {
      root: '/policy',
      PrivacyPolicy: {
        list: '/policy/privacy-policy', // Matches your privacy policy path
      },
      ReturnPolicy: {
        list: '/policy/return-policy', // Matches your return policy path
      },
    },
    contactUs: {
      list: '/contact-us',
    },
    reports:{
      list: '/reports',
    },
    offers:{
     view: '/offers'
    },
    favorite:{
      view: '/favorite'
    },
    location:{
      view:"/location"
    },
    cart:{
      view:"/carts"
    },
    paid:{
      view:'/paid'
    },
    search:{
      view:'/search'
    }
  },
};
