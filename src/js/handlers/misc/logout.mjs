export default function logOut(button) {

  if (button) {
    button.addEventListener('click', async () => {

      // Create modal 

      const modal = document.createElement('div')
      modal.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'h-full', 'bg-black', 'bg-opacity-50', 'flex', 'justify-center', 'items-center')
      modal.id = 'logoutModal'

      const modalContent = document.createElement('div')
      modalContent.classList.add('bg-white', 'p-8', 'rounded-sm', 'flex', 'flex-col', 'gap-4', 'mx-5')
      modalContent.id = 'logoutModalContent'

      const modalTitle = document.createElement('h2')
      modalTitle.classList.add('text-2xl', 'font-text', 'font-bold')
      modalTitle.innerText = 'Log out'

      const modalText = document.createElement('p')
      modalText.classList.add('font-text', 'font-light')
      modalText.innerText = 'Are you sure you want to log out?'
      
      const modalButtons = document.createElement('div')
      modalButtons.classList.add('flex', 'gap-4')

      const confirmButton = document.createElement('button')
      confirmButton.classList.add('bg-black', 'text-white', 'p-2', 'rounded-sm', 'w-24', 'font-text', 'font-semibold')
      confirmButton.innerText = 'Yes'

      const cancelButton = document.createElement('button')
      cancelButton.classList.add('bg-highlight', 'text-black', 'p-2', 'rounded-sm', 'w-24', 'font-text', 'font-semibold')
      cancelButton.innerText = 'No'

      modalButtons.appendChild(confirmButton)
      modalButtons.appendChild(cancelButton)

      modalContent.appendChild(modalTitle)
      modalContent.appendChild(modalText)
      modalContent.appendChild(modalButtons)

      modal.appendChild(modalContent)
      document.body.appendChild(modal)

      // Close modal

      modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target === cancelButton) {
          modal.remove()
        }
      })

      // Confirm log out

      confirmButton.addEventListener('click', () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('profile')
        localStorage.removeItem('userName')
        localStorage.removeItem('apiKey')

        window.location.href = '/'
      })
    })
  }
}
