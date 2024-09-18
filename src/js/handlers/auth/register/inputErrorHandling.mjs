import inputLenght from '/src/js/handlers/auth/register/error-handling/error-lenght.mjs'
import errorBox from '/src/js/handlers/misc/errorbox.mjs'
import errorUX from '/src/js/handlers/auth/register/error-handling/error-ux.mjs'

export default function inputErrorHandling(input) {


  input.forEach((input) => {
    const inputName = input.name
    const errorContainer = document.getElementById(`${inputName}_errors`)

    input.addEventListener('input', (e) => {
      const input = e.target
      const inputRaw = input.value
      const inputValue = inputRaw.trim()
      input.value = inputValue

      let error = false
      

      if (inputName === 'name') {
        if (inputValue.includes(' ')) {
          error = true
        }
      }

      if (inputName === 'email') {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

        if (inputValue.length === 0) {
          error = false
        } else if (
          !inputValue.includes('@stud.noroff.no') ||
          !emailRegex.test(inputValue) ||
          inputValue.includes(' ')
        ) {
          error = true
        }
      }

        if (inputName === 'password') {

            if (inputValue.length === 0) {
                error = false
            } else if (inputValue.length < 8) {
                error = true
            }
        }
      inputLenght(inputValue, errorContainer, error)
    })
  })
}
