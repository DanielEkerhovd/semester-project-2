import { LISTING_BASE, LISTING_PARAM } from '/src/js/api/keys.mjs';

/**
 * Fetches a single listing from the API
 * @param {number} id - The id of the listing to fetch
 * @returns {Promise} - Returns the listing as an object
 */


export default async function listingsAPI(id) {
  let url = `${LISTING_BASE}/${id}?${LISTING_PARAM}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const listing = data.data;
    return listing;
  } catch (error) {}
}
