import { API_KEY_BASE } from '../keys.mjs';

/**
 * Creates a new API key
 * @returns {Promise} - Returns the new API key
 */


export default async function createKey() {
  const accessToken = localStorage.getItem('accessToken');

  const response = await fetch(API_KEY_BASE, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('An error occurred');
  }

  return response.json();
}
