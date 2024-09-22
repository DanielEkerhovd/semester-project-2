import { LISTING_BASE } from '../keys.mjs';

/**
 * Deletes a listing from the API
 * @param {number} id - The id of the listing to delete
 * @returns {Promise} - Deletes the listing with the given id, returning 204 if successful
 */

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
    }
}