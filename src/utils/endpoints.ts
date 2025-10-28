
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
    setAddress: '/clients/profile/set-address'
  },
  categories: {
    category: "/categories",
  },
  subCategories: {
    list: '/categories/sub-categories',
  },
  product: {
    list: '/products/client',
    single: (idProduct: string) => `/products/${idProduct}/client`,
  },
  order: {
    checkout:'/orders/checkout',
    getOrder:'/orders',
    details:(orderId: string) =>`/orders/${orderId}`,
    cancelOrder:(orderId: string) =>`/orders/cancel-order/${orderId}`,
    orderRating:(orderId: string) =>`/orders/${orderId}/create-order-rating`,
  },
  returnOders:{
    view:'/orders/returned-orders',
    returnOrderById:(orderId: string) =>`/orders/orders/${orderId}/return-order-request`,
    single:(orderId: string) =>`/orders/returned-orders/${orderId}`,
  },
  orderAgain:{
    get:'/orders/past-orders',
    create:(orderid: string) => `/orders/orders/${orderid}/order-again`
  },
  offer: {
    list: "/product-unit-of-measure-offers",
  },
  banners: {
    list: "/banners",
  },
  Favorites: {
    list: "/favorite-products",
    addToFavorites: (idProduct: string) => `/favorite-products/add-favorite-product/${idProduct}`,
    removeFromFavorites: (idProduct: string) => `/favorite-products/remove-favorite-product/${idProduct}`
  },
  sellers: {
    bestSellers: "/products/client",
  },
  Carts:{
    list:'/cart/cart-items',
    addToCart:"/cart/cart-items",
  },
  Location:{
    list:"/clients/profile/all-user-address",
    edit:(id: string) =>`/clients/profile/update-address/${id}`,
  },
  Notification:{
    list:"/firebase-notification"
  },
  PaymentMethod:{
    list:"/payment-methods"
  },
  discountCoupon:{
   sendCoupon:(coupon:string)=>`/coupons/${coupon}`
  }


};