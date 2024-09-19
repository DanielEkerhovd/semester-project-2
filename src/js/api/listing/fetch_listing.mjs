import { LISTING_PARAM } from '/src/js/api/keys.mjs'

export default async function listingsAPI(limit = 10, sort = 'created', sortOrder = 'desc') {
  

  const url = `${LISTING_PARAM}&limit=${limit}&sort=${sort}&sortOrder=${sortOrder}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    const listings = data.data
    return listings
  } catch (error) {
    console.error(error)
  }
};
