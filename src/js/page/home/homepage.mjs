import listCard from '../../components/listing/list_card.mjs'
import listingsAPI from '../../api/listing/fetch_listing.mjs'
import timeLeft from "/src/js/handlers/misc/time_left.mjs"

export default async function homepage() {

    const allListings = await listingsAPI(10);
    console.log(allListings);
    
    const newListing = document.getElementById('new_list');
    
    allListings.forEach(listing => {
        const newCard = listCard(listing);
        newListing.appendChild(newCard);
    });













//   const lastListing = document.getElementById('last_list');
//   const lastCard = listCard();
//   lastListing.appendChild(lastCard);

//   const newListing = document.getElementById('new_list')
//   const newCards = []

//   for (let i = 0; i < 2; i++) {
    
//     const newCard = listCard()
//     newCards.push(newCard)
    
//   }

//   newCards.forEach(card => {
//     newListing.appendChild(card)
//   })
}
