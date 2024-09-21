import { LISTING_BASE} from '../keys.mjs'

export default async function createListing(data) {
  const token = localStorage.getItem('accessToken')
  const key = localStorage.getItem('apiKey')

  const url = `${LISTING_BASE}`

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'x-Noroff-API-Key': key,
    },
    body: JSON.stringify(data),
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}
