import listingsAPI from '../api/listing/fetch_listing.mjs'
import listCard from '../components/listing/list_card.mjs'

import { QUERY_PAGE as nextPage } from '../api/keys.mjs'


export default async function listings() {
  
  let allListings = await listingsAPI(100)
  const listingsContainer = document.getElementById('listings_items')
  const moreButton = document.getElementById('listings_more')

  let count = 20
  let page = 1

  //Initial render
  for (let i = 0; i < count; i++) {
    const listing = allListings[i]
    const newCard = listCard(listing)
    listingsContainer.appendChild(newCard)
  }

  //Load more listings
  moreButton.addEventListener('click', async () => {
    count += 20

    if (count >= allListings.length) {
      // page++
      // allListings = await listingsAPI(100, nextPage + page)
      // count = 20

      // listingsContainer.innerHTML = ''
      // window.scrollTo(0, 0)

      moreButton.style.display = 'none'
    }

    for (let i = count - 20; i < count; i++) {
      const listing = allListings[i]
      if (listing) {
        const newCard = listCard(listing);
        listingsContainer.appendChild(newCard);
      }
    }
  })




  
}
