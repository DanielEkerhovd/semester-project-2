import { LISTING_BASE } from '../keys.mjs';

/**
 * Sends a bid to the API
 * @param {object} listing - The listing to bid on
 * @param {number} bid - The bid amount
 * @returns {Promise} - Returns the listing with the new bid
 */

export default async function sendBid(listing, bid) {
  const token = localStorage.getItem('accessToken');
  const key = localStorage.getItem('apiKey');

  const id = listing.id;

  const userBid = {
    amount: bid,
  };

  const url = `${LISTING_BASE}/${id}/bids`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'x-Noroff-API-Key': key,
    },
    body: JSON.stringify(userBid),
  });

  if (!response.ok) {
    throw new Error('An error occurred');
  }

  return response.json();
}
