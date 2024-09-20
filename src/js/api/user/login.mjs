import { USER_LOGIN } from '../keys.mjs'

export default async function login(email, password) {
  const response = await fetch(USER_LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    throw new Error('Invalid email or password')
  }

  return response.json()
}
