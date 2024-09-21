import pushListing from '../api/listing/create_listing.mjs'

export default async function createListing() {
  const createListing1 = document.querySelector('#create_listing_1')
  const createListing2 = document.querySelector('#create_listing_2')

  const buttons = [createListing1, createListing2]

  const modal = document.getElementById('newListingModal')

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.classList.remove('hidden')
      document.body.style.overflow = 'hidden'
    })
  })

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden')
      document.body.style.overflow = 'auto'
    }
  })

  // Handle form data

  const form = document.getElementById('newListingForm')

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    const endsAt = document.getElementById('date').value

    const media = document.getElementById('media_container')
    const mediaInputs = media.querySelectorAll('input')
    const mediaArray = Array.from(mediaInputs)

    const mediaData = mediaArray.map((input) => {
      return {
        url: input.value,
        alt: 'Listing image',
      }
    })

    const data = {
      title: title,
      description: description,
      endsAt: endsAt,
      media: [...mediaData],
    }

    try {
      const result = await pushListing(data)

      modal.classList.add('hidden')
      const id = result.data.id
      window.location.href = `/listing/?id=${id}`

    } catch (error) {
      console.error(error)
    }
  })
}
