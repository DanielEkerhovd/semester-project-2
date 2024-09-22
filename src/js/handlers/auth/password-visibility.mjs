export default function passwordVisibility(input, button) {
  if (input && button) {
    button.addEventListener('click', () => {
      if (input.type === 'password') {
        input.type = 'text'
        button.src = '../src/media/icons/password/hide.png'
        button.alt = 'Show password icon'
      } else {
        input.type = 'password'
        button.src = '../src/media/icons/password/view.png'
        button.alt = 'Hide password icon'
      }
    })
  }
}
