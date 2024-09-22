import listingsAPI from '../api/listing/fetch_listing.mjs'
import listCard from '../components/listing/list_card.mjs'
import loginCheck from '../handlers/misc/login_check.mjs'

export default async function listings() {
  let allListings = await listingsAPI(100, '', 1)

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
  let page = 1

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

      if (count > allListings.length && allListings.length % 20 === 0) {
        page++
        allListings = await listingsAPI(100, '', page)
        if (allListings === '[]') {
          more.classList.add('hidden')
          return
        }
        count = 20
      }

      if (allListings.length < count) {
        count = allListings.length
        console.log(allListings);
        console.log(count);

        const noMore = document.createElement('p')
        noMore.classList.add(
          'mx-auto',
          'my-24',
          'text-xl',
          'font-semibold',
          'font-title',
          'md:grid-cols-1',
        )
        noMore.innerHTML = 'No more listings'
        more.innerHTML = '';
        more.appendChild(noMore)
      }

      for (let i = count - 20; i < count; i++) {
        const listing = allListings[i]
        if (listing) {
          const newCard = listCard(listing, loggedIn)
          listingsContainer.appendChild(newCard)
        }
      }
    })
  }
}
