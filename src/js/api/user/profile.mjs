import { PROFILE_BASE, PROFILE_PARAM} from '../keys.mjs'

export default async function getProfile(user, listings) {
  const token = localStorage.getItem('accessToken')
  const key = localStorage.getItem('apiKey')

  let userName;
  let url;

  if (user) {
    userName = user
  } else {
    userName = localStorage.getItem('userName')
  };

  if (listings) {
    userName += '/listings/'
    url = `${PROFILE_BASE}${userName}${PROFILE_PARAM}&_seller=true&_bids=true&_active=true`
  } else {
    url = `${PROFILE_BASE}${userName}${PROFILE_PARAM}`
  }
;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'x-Noroff-API-Key': key,
    },
  })

  if (!response.ok) {
    throw new Error('An error occurred')
  }

  return response.json()
}
