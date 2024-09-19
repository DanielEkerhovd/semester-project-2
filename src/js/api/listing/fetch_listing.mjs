import { LISTING_PARAM } from '/src/js/api/keys.mjs'

export default async function listingsAPI(limit = 10) {
  const postCount = limit

  const url = `${LISTING_PARAM}&limit=${postCount}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    const listings = data.data
    return listings
  } catch (error) {
    console.error(error)
  }
};
