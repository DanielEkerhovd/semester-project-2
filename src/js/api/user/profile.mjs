import { PROFILE_BASE, PROFILE_PARAM } from '../keys.mjs'

export default async function getProfile(user) {
  const token = localStorage.getItem('accessToken')
  const key = localStorage.getItem('apiKey')

  let userName

  if (user) {
    userName = user
  } else {
    userName = localStorage.getItem('userName')
  };

  const response = await fetch(PROFILE_BASE + userName + PROFILE_PARAM, {
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
