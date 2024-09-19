import timeCounter from '/src/js/handlers/misc/time_left.mjs'
// capitalize first letter of title
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function listCard(listing) {
  const cardId = listing.id
  const cardTitle = capitalize(listing.title)

  const cardMedia = listing.media
  const cardEnd = listing.endsAt
  const cardBids = listing.bids
  let latestBidAmount = 0

  if (cardBids.length > 0) {
    const latestBid = cardBids[cardBids.length - 1]
    latestBidAmount = latestBid.amount
  }

  const card = document.createElement('a')
  card.href = '/listing/?id=' + cardId
  card.classList.add('flex', 'flex-col', 'gap-3')

  // Hero section
  const hero = document.createElement('div')
  hero.classList.add('h-36', 'sm:h-48', 'md:h-52', 'lg:h-64')

  // Black overlay container
  const overlay = document.createElement('div')
  overlay.classList.add(
    'bg-black',
    'bg-opacity-70',
    'py-2',
    'px-4',
    'w-auto',
    'absolute',
  )

  // Title inside the overlay
  const title = document.createElement('p')
  title.classList.add(
    'text-white',
    'font-text',
    'font-light',
    'text-xl',
    'lg:text-2xl',
  )
  title.innerText = cardTitle

  overlay.appendChild(title)

  // Image
  const img = document.createElement('img')

  if (cardMedia.length > 0) {
    img.src = cardMedia[0].url
    img.alt = cardTitle + ' image'
  } else {
    img.src = '../src/media/placeholderimg.png'
    img.alt = 'Placeholder image'
  }

  img.classList.add('h-full', 'w-full', 'object-cover')

  hero.appendChild(overlay)
  hero.appendChild(img)

  // Info section
  const info = document.createElement('div')
  info.classList.add('flex', 'justify-between')

  // Bidding section
  const bidding = document.createElement('div')
  bidding.classList.add('flex', 'gap-5', 'justify-between')

  // Bid button
  const bidButton = document.createElement('button')
  bidButton.classList.add(
    'bg-highlight',
    'p-2',
    'rounded-sm',
    'w-16',
    'lg:w-32',
    'min-w-24',
    'lg:text-xl',
  )
  bidButton.innerText = 'BID'

  // Current bid details
  const bidDetails = document.createElement('div')

  const bidText = document.createElement('p')
  bidText.classList.add('font-text', 'text-faded', 'text-sm', 'lg:text-lg')
  bidText.innerText = 'Current bid'

  const bidValue = document.createElement('p')
  bidValue.id = 'latest_bid'
  bidValue.classList.add('font-text', 'font-semibold', 'text-lg', 'lg:text-2xl')
  bidValue.innerText = latestBidAmount + '$'

  bidDetails.appendChild(bidText)
  bidDetails.appendChild(bidValue)

  bidding.appendChild(bidButton)
  bidding.appendChild(bidDetails)

  // Time section
  const timeSection = document.createElement('div')

  const timeText = document.createElement('p')
  timeText.classList.add(
    'font-text',
    'text-faded',
    'text-end',
    'text-sm',
    'lg:text-lg',
  )
  timeText.innerText = 'Time left'

  const timeLeft = document.createElement('div')
  timeLeft.id = 'time_left_' + cardId
  timeLeft.classList.add('flex', 'gap-1')

  const createTimeElement = (id, text = '') => {
    const element = document.createElement('p')
    element.id = id
    element.classList.add('font-text', 'text-sm', 'lg:text-lg', 'text-center')
    element.innerText = text

    if (id === 'seconds_left_' + cardId) {
      element.classList.add('w-8')
    }

    return element
  }

  const daysLeft = createTimeElement('days_left_' + cardId)
  const hoursLeft = createTimeElement('hours_left_' + cardId)
  const minutesLeft = createTimeElement('minutes_left_' + cardId)
  const secondsLeft = createTimeElement('seconds_left_' + cardId)

  timeCounter(cardId, cardEnd)

  // Append time values to timeLeft div
  timeLeft.appendChild(daysLeft)
  timeLeft.appendChild(hoursLeft)
  timeLeft.appendChild(minutesLeft)
  timeLeft.appendChild(secondsLeft)

  // Append time text and timeLeft to timeSection
  timeSection.appendChild(timeText)
  timeSection.appendChild(timeLeft)

  // Append bidding and time section to info
  info.appendChild(bidding)
  info.appendChild(timeSection)

  // Append hero and info to card
  card.appendChild(hero)
  card.appendChild(info)

  return card
}
