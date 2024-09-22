import { LISTING_BASE } from '../keys.mjs';

export default async function deleteListing(id) {

    const token = localStorage.getItem('accessToken');
    const key = localStorage.getItem('apiKey');

    const url = `${LISTING_BASE}/${id}`;

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'x-Noroff-API-Key': key
        }
    };

    try {
        const response = await fetch(url, options);

        console.log(response);

        if (!response.ok) {
            throw new Error('An error occurred');
        };
    } catch (error) {
        console.error(error);
    }
}