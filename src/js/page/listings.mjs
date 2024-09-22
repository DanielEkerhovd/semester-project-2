import listingsAPI from '../api/listing/fetch_listing.mjs'
import listCard from '../components/listing/list_card.mjs'
import loginCheck from '../handlers/misc/login_check.mjs'

export default async function listings() {
  const allListings = await listingsAPI(100)

  const listingsContainer = document.getElementById('listings_items')
  const more = document.getElementById('listings_more')
  const moreButton = document.querySelector('#listings_more button')

  listingsContainer.innerHTML = ''

  if (allListings.length === 0) {
    listingsContainer.classList.add(
      'mx-auto',
      'my-40',
      'text-xl',
      'font-semibold',
      'font-title',
      'md:grid-cols-1',
    )
    listingsContainer.innerHTML = 'No listings found'
    return
  }

  const loggedIn = await loginCheck()

  let count

  if (allListings.length >= 20) {
    count = 20
  } else {
    count = allListings.length
  }

  //Initial render
  for (let i = 0; i < count; i++) {
    const listing = allListings[i]
    const newCard = listCard(listing, loggedIn)
    listingsContainer.appendChild(newCard)
  }

  if (count >= 20) {
    more.classList.remove('hidden')
    more.classList.add('flex')

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
}
