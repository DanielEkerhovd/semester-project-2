import { USER_REGISTER } from '../keys.mjs';

/**
 * Registers a user
 * @param {object} data - The user's data
 * @returns {Promise} - Returns the user's data as an object with a token
 */

export default async function register(data) {
  const response = await fetch(USER_REGISTER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Invalid email or password');
  }

  return response.json();
}
