import { USER_LOGIN } from '../keys.mjs';

/**
 * Logs in a user
 * @param {string} email - The user's email
 * @param {string} password - The user's password
 * @returns {Promise} - Returns the user's data
 */


export default async function login(email, password) {
  const response = await fetch(USER_LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Invalid email or password');
  }

  return response.json();
}
