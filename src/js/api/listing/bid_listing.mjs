import { LISTING_BASE } from '../keys.mjs'

export default async function sendBid(listing, bid) {
  const token = localStorage.getItem('accessToken')
  const key = localStorage.getItem('apiKey');

  const id = listing.id

  console.log(token);
    console.log(key);
  console.log(id);

  const userBid = {
    amount: bid,
  }

  const url = `${LISTING_BASE}/${id}/bids`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'x-Noroff-API-Key': key,
    },
    body: JSON.stringify(userBid),
  })

  console.log(userBid);

  if (!response.ok) {
    throw new Error('An error occurred')
  }

    return response.json()
}
