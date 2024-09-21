export const API_BASE = 'https://v2.api.noroff.dev/'

// Authentification

export const USER_LOGIN = `${API_BASE}auth/login`
export const USER_REGISTER = `${API_BASE}auth/register`

// Listings

export const LISTING_BASE = `${API_BASE}auction/listings`
export const LISTING_PARAM = '?_bids=true&_seller=true&_active=true'

// Profile

export const PROFILE_BASE = `${API_BASE}auction/profiles/`
export const PROFILE_PARAM = `?_listings=true`

// Api key

export const API_KEY_BASE = `${API_BASE}auth/create-api-key`

// Query params

export const QUERY_NEWEST = '&sort=created'
export const QUERY_ENDING_SOON = '&sort=endsAt&sortOrder=asc'
export const QUERY_HIGHEST_BID = '&sort=bids&sortOrder=desc'
export const QUERY_LOWEST_BID = '&sort=bids&sortOrder=asc'
export const QUERY_PAGE = '&page='

// Noroff KEY

export const NOROFF_KEY = 'x-Noroff-API-Key';