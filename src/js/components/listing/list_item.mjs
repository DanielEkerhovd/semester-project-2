import timeLeft from '../../handlers/misc/time_left.mjs'

export default function listItem(listing) {
  const listingID = listing.id
  const listingMedia = listing.media
  const listingTitle = listing.title
  const listingSeller = listing.seller
  const listingDescription = listing.description
  const bids = listing.bids

  let currentBid = 0

  if (bids.length > 0) {
    const latestBid = bids[bids.length - 1]
    currentBid = latestBid.amount
  }

  const listingEndTime = listing.endsAt

  const container = document.createElement('div')
  container.classList.add('flex', 'flex-col', 'items-center', 'gap-5', 'md:gap-10')

  // Hero section
  const hero = document.createElement('div')
  hero.classList.add('w-screen', 'md:max-w-7xl')

  const heroImage = document.createElement('img')
  heroImage.src = listingMedia[0].url
  heroImage.alt = `${listingTitle} image`
  heroImage.id = 'hero_image'
  heroImage.classList.add(
    'w-full',
    'h-52',
    'md:h-64',
    'lg:h-96',
    'object-cover',
    'drop-shadow-2xl'
  )

  hero.appendChild(heroImage)

  // Listing content
  const listingContent = document.createElement('div')
  listingContent.classList.add(
    'w-full',
    'xl:max-w-7xl',
    'flex',
    'flex-col',
    'xl:flex-row',
    'gap-10',
    'items-center',
  )

  // Listing info
  const listingInfo = document.createElement('div')
  listingInfo.classList.add('w-11/12', 'flex', 'flex-col', 'gap-10')

  const titleContainer = document.createElement('div')

  const title = document.createElement('h1')
  title.classList.add('font-title', 'text-3xl', 'lg:text-4xl', 'font-semibold')
  title.innerText = listingTitle

  const owner = document.createElement('a')
  owner.href = '../profile/?id=' + listingSeller.name
  owner.classList.add('font-title', 'lg:text-lg')
  owner.innerHTML = `By <span class="underline">${listingSeller.name}</span>`

  const description = document.createElement('p')
  description.classList.add('font-text', 'lg:text-lg', 'max-w-2xl')
  description.innerText = listingDescription

  titleContainer.append(title, owner)

  // bid and time

  const valuesContainer = document.createElement('div')
  valuesContainer.classList.add('flex', 'justify-between', 'lg:max-w-2xl')

  // Current bid
  const bidContainer = document.createElement('div')

  const currentBidTitle = document.createElement('h2')
  currentBidTitle.classList.add(
    'font-text',
    'text-faded',
    'text-lg',
    'lg:text-xl',
  )
  currentBidTitle.innerText = 'Current bid'

  const bidAmount = document.createElement('p')
  bidAmount.id = 'listing_current_bid'
  bidAmount.classList.add(
    'font-text',
    'font-semibold',
    'text-xl',
    'lg:text-2xl',
  )
  bidAmount.innerHTML = `${currentBid}$`

  bidContainer.append(currentBidTitle, bidAmount)

  // Time left

  const timeContainer = document.createElement('div')
  timeContainer.classList.add('flex', 'flex-col', 'items-end')

  const timeTitle = document.createElement('h2')
  timeTitle.classList.add('font-text', 'text-faded', 'text-lg', 'lg:text-xl')
  timeTitle.innerText = 'Time left'

  const timeLeftContainer = document.createElement('div')
  timeLeftContainer.classList.add('flex', 'gap-1')

  const createTimeElement = (id, text = '') => {
    const element = document.createElement('p')

    element.id = id
    element.classList.add('font-text', 'lg:text-xl')
    element.innerHTML = text

    if (id === 'seconds_left_' + listingID) {
      element.classList.add('md:w-8')
    }

    return element
  }

  const days = createTimeElement('days_left_' + listingID)
  const hours = createTimeElement('hours_left_' + listingID)
  const minutes = createTimeElement('minutes_left_' + listingID)
  const seconds = createTimeElement('seconds_left_' + listingID)

  timeLeft(listingID, listingEndTime)

  timeLeftContainer.append(days, hours, minutes, seconds)
  timeContainer.append(timeTitle, timeLeftContainer)
  valuesContainer.append(bidContainer, timeContainer)

  // Bid button
  const bidButton = document.createElement('button')
  bidButton.id = 'bid_button'
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

  listingInfo.append(titleContainer, description, valuesContainer, bidButton)

  // Media gallery
  const mediaGallery = document.createElement('div')
  mediaGallery.classList.add('w-full', 'flex', 'items-center', 'justify-center')

  const carouselContainer = document.createElement('div')
  carouselContainer.classList.add('carousel-container', 'w-full', 'relative')

  if (listingMedia.length === 1) {
    carouselContainer.classList.add('hidden')
  }

  const carousel = document.createElement('div')
  carousel.id = 'carousel'
  carousel.classList.add(
    'relative',
    'flex',
    'overflow-hidden',
    'w-full',
    'h-52',
    'sm:h-72',
    'lg:h-96',
  )

  // Assume `listingMedia` is an array of media objects
  listingMedia.forEach((media, index) => {
    if (index === 0) {
      return // Skip first for hero image if needed
    }

    const image = document.createElement('img')
    image.src = `${listingMedia[index].url}`
    image.alt = `Image of ${listingTitle}`
    image.classList.add(
      'carousel-item',
      'w-full',
      'cursor-pointer',
      'object-cover',
    )
    image.dataset.id = index

    carousel.appendChild(image)
  })

  const carouselControlsPrev = document.createElement('button')
  carouselControlsPrev.id = 'prev'
  carouselControlsPrev.classList.add(
    'absolute',
    'left-0',
    'top-1/2',
    '-translate-y-1/2',
    'bg-gray-700',
    'text-white',
    'px-4',
    'py-2',
  )
  carouselControlsPrev.innerText = 'Prev'

  const carouselControlsNext = document.createElement('button')
  carouselControlsNext.id = 'next'
  carouselControlsNext.classList.add(
    'absolute',
    'right-0',
    'top-1/2',
    '-translate-y-1/2',
    'bg-gray-700',
    'text-white',
    'px-4',
    'py-2',
  )
  carouselControlsNext.innerText = 'Next'

  carouselContainer.append(carousel, carouselControlsPrev, carouselControlsNext)

  // Modal setup
  const modal = document.createElement('div')
  modal.id = 'imageModal'
  modal.classList.add(
    'fixed',
    'inset-0',
    'bg-black',
    'bg-opacity-75',
    'flex',
    'items-center',
    'justify-center',
    'hidden'
  )

  const closeModal = document.createElement('span')
  closeModal.id = 'closeModal'
  closeModal.classList.add(
    'absolute',
    'top-5',
    'right-5',
    'text-white',
    'text-3xl',
    'cursor-pointer',
    'z-10'
  )
  closeModal.innerHTML = '&times;'
  modal.appendChild(closeModal)

  const modalCarousel = document.createElement('div')
  modalCarousel.classList.add(
    'relative',
    'flex',
    'items-center',
    'justify-center',
    'w-full',
    'max-w-3xl',
  )

  const modalPrev = document.createElement('button')
  modalPrev.id = 'modalPrev'
  modalPrev.classList.add(
    'absolute',
    'left-0',
    'bg-gray-700',
    'text-white',
    'px-4',
    'py-2',
  )
  modalPrev.innerText = 'Prev'

  const modalImage = document.createElement('img')
  modalImage.id = 'modalImage'
  modalImage.classList.add('max-w-full', 'max-h-full', 'w-full')
  modalImage.src = ''
  modalImage.alt = 'Full Image'

  const modalNext = document.createElement('button')
  modalNext.id = 'modalNext'
  modalNext.classList.add(
    'absolute',
    'right-0',
    'bg-gray-700',
    'text-white',
    'px-4',
    'py-2',
  )
  modalNext.innerText = 'Next'

  modalCarousel.append(modalPrev, modalImage, modalNext)
  modal.append(modalCarousel)

  mediaGallery.append(carouselContainer, modal)

  listingContent.append(listingInfo, mediaGallery)
  container.append(hero, listingContent)

  return container
}

//
//   <!-- Listing content -->
//   <section
//     class="w-full xl:max-w-7xl flex flex-col xl:flex-row gap-10 items-center"
//   >
//     <!-- Listing info -->
//     <div class="w-11/12 flex flex-col gap-10">
//       <div class="">
//         <h1 class="font-title text-3xl lg:text-4xl font-semibold">
//           Brown Dog hat
//         </h1>
//         <a id="listing_owner" href="#" class="font-title lg:text-lg">
//           By <span class="underline">John Doe</span>
//         </a>
//       </div>

//       <div class="">
//         <p class="font-text lg:text-lg max-w-2xl">
//           Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris
//           dictumst neque id risus taciti odio. Maecenas nullam gravida praes
//           ent volutpat vestibulum. Tempor taciti posuere pharetra molestie
//           hac.
//         </p>
//       </div>

//       <div class="">
//         <div class="flex justify-between lg:max-w-2xl">
//           <!-- Current bid -->
//           <div>
//             <h2 class="font-text text-faded text-lg lg:text-xl">
//               Current bid
//             </h2>
//             <p
//               id="listing_current_bid"
//               class="font-text font-semibold text-xl lg:text-2xl"
//             >
//               <span>28</span>$
//             </p>
//           </div>
//           <div class="flex flex-col items-end">
//             <!-- Time left -->
//             <h2 class="font-text text-faded text-lg lg:text-xl">
//               Time left
//             </h2>
//             <div class="flex gap-1">
//               <p id="listing_days" class="font-text lg:text-xl">
//                 <span>1</span>d
//               </p>
//               <p id="listing_hours" class="font-text lg:text-xl">
//                 <span>12</span>h
//               </p>
//               <p id="listing_minutes" class="font-text lg:text-xl">
//                 <span>30</span>m
//               </p>
//               <p id="listing_seconds" class="font-text lg:text-xl">
//                 <span>30</span>s
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="">
//         <!-- Bid -->
//         <button
//           class="bg-highlight p-2 rounded-sm w-16 lg:w-32 xl:p-4 min-w-24 lg:text-xl"
//         >
//           BID
//         </button>
//       </div>
//     </div>

//     <!-- Media gallery -->

//     <div class="w-full flex items-center justify-center">
//       <div class="carousel-container w-full relative">
//         <div
//           id="carousel"
//           class="relative flex overflow-hidden w-full h-52 sm:h-72 lg:h-96"
//         >
//           <!-- Images -->
//           <img
//             src="https://img.freepik.com/free-photo/silly-brown-newfoundland-dog-with-black-top-hat_493961-1702.jpg"
//             class="carousel-item w-full cursor-pointer object-cover"
//             alt="Image 1"
//             data-id="1"
//           />
//           <img
//             src="https://i.pinimg.com/736x/c6/42/9d/c6429d327986f6501b9771c38056e41a.jpg"
//             class="carousel-item w-full hidden cursor-pointer object-cover"
//             alt="Image 2"
//             data-id="2"
//           />
//           <img
//             src="https://i.etsystatic.com/18460845/r/il/8241c7/3139387828/il_570xN.3139387828_dxoe.jpg"
//             class="carousel-item w-full hidden cursor-pointer object-cover"
//             alt="Image 3"
//             data-id="3"
//           />
//         </div>

//         <!-- Carousel controls -->
//         <button
//           id="prev"
//           class="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white px-4 py-2"
//         >
//           Prev
//         </button>
//         <button
//           id="next"
//           class="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white px-4 py-2"
//         >
//           Next
//         </button>
//       </div>

//       <!-- Modal -->
//       <div
//         id="imageModal"
//         class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center hidden"
//       >
//         <span
//           id="closeModal"
//           class="absolute top-5 right-5 text-white text-3xl cursor-pointer"
//           >&times;</span
//         >
//         <!-- Modal Image Carousel -->
//         <div
//           class="relative flex items-center justify-center w-full max-w-3xl"
//         >
//           <button
//             id="modalPrev"
//             class="absolute left-0 bg-gray-700 text-white px-4 py-2"
//           >
//             Prev
//           </button>
//           <img
//             id="modalImage"
//             class="max-w-full max-h-full w-full"
//             src=""
//             alt="Full Image"
//           />
//           <button
//             id="modalNext"
//             class="absolute right-0 bg-gray-700 text-white px-4 py-2"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
