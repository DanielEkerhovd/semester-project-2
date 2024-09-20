import item from '../components/listing/list_item.mjs';
import singleListing from '../api/listing/fetch_single.mjs';
import carouselModal from '../handlers/misc/carousel.mjs';

export default async function listings() {

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const listing = await singleListing(id);


    const itemContainer = document.getElementById('listing_item');

    const listingItem = item(listing);

    itemContainer.appendChild(listingItem);

    carouselModal();

};

