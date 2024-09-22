import { LISTING_BASE, LISTING_PARAM } from '/src/js/api/keys.mjs';

/**
 * Fetches listings from the API
 * @param {number} limit - The number of listings to fetch
 * @param {string} param - Additional query parameters
 * @param {number} page - The page number to fetch
 * @returns {Promise} - Returns the listings as an array of objects
 */

export default async function listingsAPI(limit = 10, param = '', page = 1) {
  // Fetch query params
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get('q');

  let url = `${LISTING_BASE}?${LISTING_PARAM}&limit=${limit}&page=${page}${param}`;

  if (searchParam) {
    url = `${LISTING_BASE}/search?q=${searchParam}&${LISTING_PARAM}&limit=${limit}&page=${page}${param}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    const listings = data.data;
    return listings;
  } catch (error) {}
}
