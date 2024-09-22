import listCard from '../../components/listing/list_card.mjs'
import listingsAPI from '../../api/listing/fetch_listing.mjs'
import loginCheck from '../../handlers/misc/login_check.mjs';

import { QUERY_NEWEST, QUERY_ENDING_SOON } from '../../api/keys.mjs';

export default async function homepage() {

    const lastChanceContainer = document.getElementById('last_list');
    const newContainer = document.getElementById('new_list');

    lastChanceContainer.innerHTML = '';
    newContainer.innerHTML = '';

    const allListings = await listingsAPI(20, QUERY_NEWEST);
    const lastChanceListings = await listingsAPI(2, QUERY_ENDING_SOON);

    const loggedIn = await loginCheck();
    
    lastChanceListings.forEach(listing => {
        const newCard = listCard(listing, loggedIn);
        lastChanceContainer.appendChild(newCard);
    });

    allListings.forEach(listing => {
        const newCard = listCard(listing);
        newContainer.appendChild(newCard);
    });

}
