export const API_BASE = 'https://v2.api.noroff.dev/';

// Authentification

export const USER_LOGIN = `${API_BASE}auth/login`;
export const USER_REGISTER = `${API_BASE}auth/register`;

// Listings

export const LISTING_BASE = `${API_BASE}auction/listings`;
export const LISTING_PARAM = `${LISTING_BASE}?_bids=true`;

// Profile

export const PROFILE_BASE = `${API_BASE}auction/profiles`;
export const PROFILE_PARAM = `${PROFILE_BASE}?_listings=true`;
