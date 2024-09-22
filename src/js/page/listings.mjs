import listingsAPI from '../api/listing/fetch_listing.mjs'
import listCard from '../components/listing/list_card.mjs'
import loginCheck from '../handlers/misc/login_check.mjs'

export default async function listings() {

  let allListings = await listingsAPI(100)
  const listingsContainer = document.getElementById('listings_items')
  const more = document.getElementById('listings_more')
  const moreButton = document.querySelector('#listings_more button')

  listingsContainer.innerHTML = ''
  more.classList.remove('hidden');
  more.classList.add('flex');

  const loggedIn = await loginCheck();

  let count = 20

  //Initial render
  for (let i = 0; i < count; i++) {
    const listing = allListings[i]
    const newCard = listCard(listing, loggedIn)
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
