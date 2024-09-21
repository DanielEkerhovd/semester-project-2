export default async function createListing() {
  //    I have 2 buttons that have the id of create_listing_1 and 2 respectively. I want to add an event listener to each of them that will open the modal when clicked. I will use the querySelector method to select the buttons and add the event listener to each of them.

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
}
