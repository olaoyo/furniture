// Endpoint URLs 

const apiURL = `/api`;

const API = {
  auth: {
    register: `${apiURL}/users/register/`,
    login: `${apiURL}/users/login/`,
    profile: (id) => `${apiURL}/users/${id}/`,
    update: `${apiURL}/users/profile/update/`,
  },

  furniture: {
    shop: `${apiURL}/furniture/`,
    details: (id) => `${apiURL}/furniture/${id}/`,
  },

  cart: `/cart`,

  addToCart: (qty, id) => `/cart/${id}/qty?=${qty}`,

  order: `${apiURL}/orders/add/`,

};

export default API;


// Navigation URLs

export const routeURL = {
  
  home: ``,
  
  auth: {
    register: `/register`,
    login: `/login`,
    profile: `/profile`,
    admin: `/admin`,
  },

  furniture: {
    home: `/`,
    shop: `/shop`,
    details: (id) => `/shop/furniture/${id}`,
  },

  cart: `/cart`,

  addToCart: (id, qty) =>`/cart/${id}/qty?=${qty}`,
  
  checkout: `/login?redirect=chekout`,

  shipping: `/shipping`,
  
  payment: `/payment`,
  
  placeOrder: `/placeorder`,

  orderDetails: (id) => `/order/${id}`
};
