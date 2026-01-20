
export const paths = {
  // AUTH
  auth: {
    login: '/auth/login',
    forgotPassword: '/auth/forgot-password',
    new_register:'/auth/new-register',
    register: '/auth/register',
    verify: '/auth/verify',
    new_verify:'auth/new-verify',
    resetPassword: '/auth/reset-password',
  },
  // Control Panel
  controlPanel: {
    main: '/',
    profile:{
      viewProfile:'/edit-profile'
    },
    landing:{
      view:'/landing-page'
    },
    privacy:{
      view:'/privacy-policy'
    },
    blog:{
      view:'/blog',
      details:(id:string)=>`/blog/${id}`
    },
    legal: {
    privacy: '/legal/privacy',
    terms: '/legal/terms',
    faq: '/legal/faq',
  },
  },
};
