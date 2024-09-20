import item from '../components/listing/list_item.mjs';
import singleListing from '../api/listing/fetch_single.mjs';

export default async function listings() {

    const id = '529d33a8-ef73-4bc9-a58e-8da46f99e5a6'

    const listing = await singleListing(id);

    console.log(listing);

    const itemContainer = document.getElementById('listing_item');

    const listingItem = item(listing);

    itemContainer.appendChild(listingItem);

    console.log(listingItem);
};

