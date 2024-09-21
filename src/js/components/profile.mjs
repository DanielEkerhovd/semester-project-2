import logOut from '../handlers/misc/logout.mjs'

export default function buildProfile(user) {
  const currentUser = localStorage.getItem('userName')

  const profile = user.data
  const userName = profile.name
  const userBanner = profile.banner.url
  const userAvatar = profile.avatar.url
  const userBio = profile.bio

  const userWins = profile._count.wins
  const userListings = profile._count.listings

  const container = document.createElement('div')
  container.classList.add(
    'w-full',
    'flex',
    'flex-col',
    'gap-5',
    'justify-center',
  )

  const bannerContainer = document.createElement('div')
  bannerContainer.classList.add('w-full')

  // Profile banner
  const heroBanner = document.createElement('img')
  heroBanner.classList.add(
    'w-full',
    'h-36',
    'md:h-52',
    'lg:h-64',
    'object-cover',
    'rounded-sm',
  )
  heroBanner.src = userBanner

  bannerContainer.appendChild(heroBanner)

  // Profile content

  const profileContent = document.createElement('div')
  profileContent.classList.add(
    'flex',
    'flex-col',
    'lg:flex-row',
    'justify-around',
    'gap-5',
    'lg:gap-10',
  )

  const leftContainer = document.createElement('div')
  leftContainer.classList.add('flex', 'gap-5', 'lg:gap-10')

  // Profile image + settings
  const profileImageContainer = document.createElement('div')
  profileImageContainer.classList.add(
    'flex',
    'flex-col',
    'gap-2',
    'flex-shrink-0',
  )

  const profileImage = document.createElement('img')
  profileImage.src = userAvatar
  profileImage.classList.add(
    'size-28',
    'sm:size-36',
    'md:size-52',
    'object-cover',
    'rounded-sm',
  )

  if (currentUser === userName) {
    // Settings
    const settingsContainer = document.createElement('div')
    settingsContainer.classList.add('flex', 'gap-1')

    const settingsButton = document.createElement('button')
    settingsButton.classList.add('bg-highlight', 'rounded-sm', 'p-2')

    const settingsIcon = document.createElement('img')
    settingsIcon.src = '../src/media/icons/edit-b.png'
    settingsIcon.classList.add('size-6', 'md:size-8')

    const logoutButton = document.createElement('button')
    logoutButton.id = 'logout_button'
    logoutButton.classList.add(
      'bg-black',
      'font-text',
      'font-light',
      'text-white',
      'p-1',
      'grow',
    )
    logoutButton.textContent = 'Log out'

    settingsButton.append(settingsIcon)
    settingsContainer.append(settingsButton, logoutButton)

    profileImageContainer.append(profileImage, settingsContainer)

    logOut(logoutButton)
  } else {
    profileImageContainer.append(profileImage)
  }

  // Profile bio
  const profileBioContainer = document.createElement('div')
  profileBioContainer.classList.add('flex', 'flex-col', 'gap-1', 'sm:gap-5')

  const profileNameElement = document.createElement('h1')
  profileNameElement.classList.add(
    'font-text',
    'font-semibold',
    'text-lg',
    'sm:text-2xl',
    'md:text-3xl',
  )
  profileNameElement.textContent = userName

  const profileBio = document.createElement('p')
  profileBio.classList.add(
    'font-text',
    'text-sm',
    'sm:text-base',
    'md:text-lg',
    'max-w-md',
    'md:max-w-lg',
    'grow',
  )

  if (userBio !== null) {
    profileBio.textContent = userBio
  } else {
    profileBio.textContent = 'Write a bio!'
  }

  profileBioContainer.append(profileNameElement, profileBio)

  // Profile stats
  const statContainer = document.createElement('div')
  statContainer.classList.add(
    'flex',
    'lg:flex-col',
    'font-text',
    'gap-5',
    'md:min-h-24',
    'md:justify-self-start',
  )

  const stats = (title, value) => {
    const stat = document.createElement('div')
    stat.classList.add(
      'flex',
      'flex-col',
      'justify-center',
      'items-center',
      'bg-highlight',
      'p-2',
      'grow',
      'min-w-40',
      'md:text-xl',
    )

    const statTitle = document.createElement('p')
    statTitle.classList.add('text-black')
    statTitle.textContent = title

    const statValue = document.createElement('p')
    statValue.classList.add('font-semibold')
    statValue.textContent = value

    stat.append(statTitle, statValue)

    return stat
  }

  const listings = stats('Listings', userListings)
  const wins = stats('Wins', userWins)

  statContainer.append(listings, wins)

  leftContainer.append(
    profileImageContainer,
    profileBioContainer,
    statContainer,
  )

  profileContent.append(leftContainer, statContainer)

  container.append(bannerContainer, profileContent)

  return container
}
