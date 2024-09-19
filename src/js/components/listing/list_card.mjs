export default function listCard() {
  // Create the main anchor tag
  const card = document.createElement('a')
  card.href = '#'
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
  title.innerText = 'Brown dog hat'

  overlay.appendChild(title)

  // Image
  const img = document.createElement('img')
  img.src = '../src/media/placeholderimg.png' // Placeholder image path
  img.alt = 'Placeholder image'
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
  bidValue.innerText = '28$'

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
  timeLeft.id = 'time_left'
  timeLeft.classList.add('flex', 'gap-1')

  // Days, hours, minutes, seconds
  const daysLeft = document.createElement('p')
  daysLeft.id = 'days_left'
  daysLeft.classList.add('font-text', 'text-sm', 'lg:text-lg')
  daysLeft.innerText = '1d'

  const hoursLeft = document.createElement('p')
  hoursLeft.id = 'hours_left'
  hoursLeft.classList.add('font-text', 'text-sm', 'lg:text-lg')
  hoursLeft.innerText = '12h'

  const minutesLeft = document.createElement('p')
  minutesLeft.id = 'minutes_left'
  minutesLeft.classList.add('font-text', 'text-sm', 'lg:text-lg')
  minutesLeft.innerText = '30m'

  const secondsLeft = document.createElement('p')
  secondsLeft.id = 'seconds_left'
  secondsLeft.classList.add('font-text', 'text-sm', 'lg:text-lg')
  secondsLeft.innerText = '28s'

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
