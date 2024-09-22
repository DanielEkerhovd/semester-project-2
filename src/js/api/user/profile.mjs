import { PROFILE_BASE, PROFILE_PARAM } from '../keys.mjs';

/**
 * Fetches a user profile from the API
 * @param {string} user - The user to fetch the profile for
 * @param {boolean} listings - Whether to fetch the user's listings
 * @returns {Promise} - Returns the user's profile
 */


export default async function getProfile(user, listings) {
  const token = localStorage.getItem('accessToken');
  const key = localStorage.getItem('apiKey');

  let userName;
  let url;

  if (user) {
    userName = user;
  } else {
    userName = localStorage.getItem('userName');
  }

  if (listings) {
    userName += '/listings/';
    url = `${PROFILE_BASE}${userName}${PROFILE_PARAM}&_seller=true&_bids=true&_active=true`;
  } else {
    url = `${PROFILE_BASE}${userName}${PROFILE_PARAM}`;
  }
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'x-Noroff-API-Key': key,
    },
  });

  if (!response.ok) {
    throw new Error('An error occurred');
  }

  return response.json();
}
