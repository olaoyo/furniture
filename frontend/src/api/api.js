// Endpoint URLs 

const apiURL = `/api`;

const API = {
  auth: {
    register: `${apiURL}/users/register/`,
    login: `${apiURL}/users/login/`,
  },

  furniture: {
    shop: `${apiURL}/furniture/`,
    details: (id) => `${apiURL}/furniture/${id}/`,
  },

  cart: `/cart`,
  addToCart: (qty, id) => `/cart/${id}/qty?=${qty}`,
};

export default API;


// Navigation URLs

export const routeURL = {
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
  
};
