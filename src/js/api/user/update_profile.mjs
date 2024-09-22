import { PROFILE_BASE } from '../keys.mjs';

export default async function updateProfile(user, data) {
  const token = localStorage.getItem('accessToken');
  const key = localStorage.getItem('apiKey');

  const url = `${PROFILE_BASE}${user}`;

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'x-Noroff-API-Key': key,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to update profile');
  }

  return response.json();
}
