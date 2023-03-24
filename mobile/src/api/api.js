// Endpoint URLs

const apiURL = `http://127.0.0.1:8000/api`;

const API = {
  auth: {
    register: `${apiURL}/users/register/`,
    login: `${apiURL}/users/login/`,
    profile: (id) => `${apiURL}/users/${id}/`,
  },
  
  furniture: {
    shop: `${apiURL}/furniture/`,
    details: (id) => `${apiURL}/furniture/${id}/`,
  },
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
  addToCart: (id, qty) => `/cart/${id}/qty?=${qty}`,
  checkout: `/login?redirect=chekout`,
};

// Base URL needed for images
export const baseURL = `http://127.0.0.1:8000`;
