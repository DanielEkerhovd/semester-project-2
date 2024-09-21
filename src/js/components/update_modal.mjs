export default function updateModal(content) {
  const user = content.data

  console.log(user)

  const bio = user.bio ? user.bio : ''
  const image = user.avatar.url ? user.avatar.url : ''
  const banner = user.banner.url ? user.banner.url : ''

  const modal = document.createElement('div')
  modal.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'z-10', 'hidden')
  modal.id = 'updateModal'

  const modalContent = document.createElement('div')
  modalContent.classList.add(
    'max-w-2xl',
    'w-10/12',
    'bg-white',
    'rounded',
    'p-8',
    'absolute',
    'top-1/2',
    'left-1/2',
    'transform',
    '-translate-x-1/2',
    '-translate-y-1/2',
  )
  modalContent.id = 'updateModalContent'

  const modalTitle = document.createElement('h2')
  modalTitle.classList.add('text-2xl', 'font-text', 'font-bold', 'mb-4')
  modalTitle.innerText = 'Update profile'

  const form = document.createElement('form')
  form.id = 'updateForm'

  // Close modal

  const closeButton = document.createElement('div')
  closeButton.id = 'closeModal'
  closeButton.classList.add('absolute', 'top-0', 'right-0', 'p-4')
  closeButton.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>`

  modalContent.appendChild(closeButton)

  // Profile image

  const profileImageLabel = document.createElement('label')
  profileImageLabel.classList.add(
    'block',
    'text-sm',
    'font-text',
    'font-light',
    'mb-2',
  )
  profileImageLabel.htmlFor = 'profileImage'
  profileImageLabel.innerText = 'Profile image (url)'

  const profileImage = document.createElement('input')
  profileImage.classList.add(
    'w-full',
    'p-2',
    'border',
    'border-gray-300',
    'rounded',
    'mb-4',
    'text-xs',
  )
  profileImage.type = 'text'
  profileImage.id = 'profileImage'
  profileImage.name = 'profileImage'
  profileImage.placeholder = 'url'
  profileImage.value = image

  // Profile banner

  const profileBannerLabel = document.createElement('label')
  profileBannerLabel.classList.add(
    'block',
    'text-sm',
    'font-text',
    'font-light',
    'mb-2',
  )
  profileBannerLabel.htmlFor = 'profileBanner'
  profileBannerLabel.innerText = 'Profile banner (url)'

  const profileBanner = document.createElement('input')
  profileBanner.classList.add(
    'w-full',
    'p-2',
    'border',
    'border-gray-300',
    'rounded',
    'mb-4',
    'text-xs',
  )
  profileBanner.type = 'text'
  profileBanner.id = 'profileBanner'
  profileBanner.name = 'profileBanner'
  profileBanner.placeholder = 'url'
  profileBanner.value = banner

  // Profile bio

  const profileBioLabel = document.createElement('label')
  profileBioLabel.classList.add(
    'block',
    'text-sm',
    'font-text',
    'font-light',
    'mb-2',
  )
  profileBioLabel.htmlFor = 'profileBio'
  profileBioLabel.innerText = 'Profile bio'

  const profileBio = document.createElement('textarea')
  profileBio.classList.add(
    'w-full',
    'p-2',
    'border',
    'border-gray-300',
    'rounded',
    'mb-4',
    'font-text',
  )
  profileBio.id = 'profileBio'
  profileBio.name = 'profileBio'
  profileBio.placeholder = 'Tell us about yourself'
  profileBio.value = bio

  const submitButton = document.createElement('button')
  submitButton.classList.add(
    'w-full',
    'bg-highlight',
    'text-black',
    'rounded',
    'p-2',
    'font-text',
    'font-bold',
  )

  submitButton.innerText = 'Update profile'

  form.appendChild(profileImageLabel)
  form.appendChild(profileImage)
  form.appendChild(profileBannerLabel)
  form.appendChild(profileBanner)
  form.appendChild(profileBioLabel)
  form.appendChild(profileBio)
  form.appendChild(submitButton)

  modalContent.appendChild(modalTitle)
  modalContent.appendChild(form)

  modal.appendChild(modalContent)

  return modal
}
