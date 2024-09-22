

import { LISTING_BASE, LISTING_PARAM } from '/src/js/api/keys.mjs'

export default async function listingsAPI(id) {
  let url = `${LISTING_BASE}/${id}?${LISTING_PARAM}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    const listing = data.data
    return listing
  } catch (error) {
    
  }
}
