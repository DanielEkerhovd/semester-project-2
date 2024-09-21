export default function createFooter(status) {
  if (status) {
    const profileInfo = JSON.parse(localStorage.getItem('profile'))

    const footer = document.createElement('div')
    footer.classList.add(
      'bg-black',
      'rounded-lg',
      'h-12',
      'w-11/12',
      'm-auto',
      'fixed',
      'bottom-5',
      'left-0',
      'right-0',
      'md:hidden',
    )

    const nav = document.createElement('nav')
    nav.classList.add(
      'flex',
      'justify-between',
      'px-7',
      'h-full',
      'w-full',
      'max-w-80',
      'm-auto',
    )

    const browse = document.createElement('a')
    browse.href = '../listings/'
    browse.classList.add('h-full', 'flex', 'justify-center', 'items-center')
    const browseImg = document.createElement('img')
    browseImg.src = '../src/media/icons/hotbar/browse-w.png'
    browseImg.alt = 'Browse icon'
    browseImg.classList.add('size-10/12', 'object-contain')
    browse.appendChild(browseImg)

    const create = document.createElement('a')
    create.href = '#'
    create.classList.add('h-full', 'flex', 'justify-center', 'items-center')
    const createImg = document.createElement('img')
    createImg.src = '../src/media/icons/hotbar/create-w.png'
    createImg.alt = 'Create new listing icon'
    createImg.classList.add('size-10/12', 'object-contain')
    create.appendChild(createImg)

    const profile = document.createElement('a')
    profile.href = `../profile/?user=${profileInfo.name}`
    profile.classList.add('h-full', 'flex', 'justify-center', 'items-center')
    const profileImg = document.createElement('img')
    profileImg.src = '../src/media/icons/hotbar/profile-w.png'
    profileImg.alt = 'Profile icon'
    profileImg.classList.add('size-10/12', 'object-contain')
    profile.appendChild(profileImg)

    nav.appendChild(browse)
    nav.appendChild(create)
    nav.appendChild(profile)
    footer.appendChild(nav)

    document.body.appendChild(footer)
  }
}
