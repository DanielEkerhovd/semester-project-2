import listingsAPI from '../api/listing/fetch_listing.mjs'
import listCard from '../components/listing/list_card.mjs'

export default async function listings() {
  let allListings = await listingsAPI(100)
  const listingsContainer = document.getElementById('listings_items')
  const moreButton = document.getElementById('listings_more')

  let count = 20

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
      moreButton.style.display = 'none'
    }

    for (let i = count - 20; i < count; i++) {
      const listing = allListings[i]
      if (listing) {
        const newCard = listCard(listing)
        listingsContainer.appendChild(newCard)
      }
    }
  })
}
