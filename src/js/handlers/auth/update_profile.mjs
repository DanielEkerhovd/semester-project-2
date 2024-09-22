import createModal from '../../components/update_modal.mjs'
import updateProfile from '../../api/user/update_profile.mjs'

export default function update(content) {
  const modal = createModal(content)
  document.body.appendChild(modal)

  const updateButton = document.getElementById('update_button')

  updateButton.addEventListener('click', () => {
    modal.classList.remove('hidden')
  })

  // Closes modal
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden')
    }
  })
  const closeButton = document.getElementById('closeModal')
  closeButton.addEventListener('click', () => {
    modal.classList.add('hidden')
  })

  const form = document.getElementById('updateForm')
  const profileImage = document.getElementById('profileImage')
  const bannerImage = document.getElementById('profileBanner')
  const bio = document.getElementById('profileBio')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const data = {
      avatar: {
        url: profileImage.value,
        alt: 'Profile image',
      },
      banner: {
        url: bannerImage.value,
        alt: 'Profile banner',
      },
      bio: bio.value,
    }

    try {
      await updateProfile(content.data.name, data)
      window.location.reload()
    } catch (error) {
      
    }
  })
}
