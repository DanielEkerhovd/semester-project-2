import listCard from '../../components/listing/list_card.mjs'
import listingsAPI from '../../api/listing/fetch_listing.mjs'

export default async function homepage() {

    const lastChanceContainer = document.getElementById('last_list');
    const newContainer = document.getElementById('new_list');

    const allListings = await listingsAPI(20);
    const lastChanceListings = await listingsAPI(2, 'endsAt', 'asc');
    
    lastChanceListings.forEach(listing => {
        const newCard = listCard(listing);
        lastChanceContainer.appendChild(newCard);
    });

    allListings.forEach(listing => {
        const newCard = listCard(listing);
        newContainer.appendChild(newCard);
    });

}
