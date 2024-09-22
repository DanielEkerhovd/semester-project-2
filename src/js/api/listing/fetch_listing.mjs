import { LISTING_BASE, LISTING_PARAM } from '/src/js/api/keys.mjs'

export default async function listingsAPI(limit = 10, queryParam = false) {
  
  // Fetch query params
  const urlParams = new URLSearchParams(window.location.search)
  const searchParam = urlParams.get('q')

  let url = `${LISTING_BASE}?${LISTING_PARAM}&limit=${limit}`
  
  if (searchParam) {
    url = `${LISTING_BASE}/search?q=${searchParam}&${LISTING_PARAM}&limit=${limit}`
  }

  try {
    const response = await fetch(url);
    const data = await response.json()
    const listings = data.data
    return listings
  } catch (error) {
    console.error(error)
  }
};