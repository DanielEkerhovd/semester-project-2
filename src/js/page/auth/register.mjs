import registerForm from '/src/js/handlers/auth/register/register_formevent.mjs'
import passwordVisibility from '../../handlers/auth/password-visibility.mjs'

export default function register() {
  // Register form
  registerForm()



  // Password visibility

  const passwordInput = document.getElementById('register_password')
  const passwordButton = document.querySelector('#password-hide img')

  passwordVisibility(passwordInput, passwordButton)

  
}
