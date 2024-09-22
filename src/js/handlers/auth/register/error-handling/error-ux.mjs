import errorVisual from '/src/js/handlers/auth/register/error-handling/error-visuals.mjs'
import errorBox from '/src/js/handlers/misc/errorbox.mjs'

export default function errorUX(container, error = false) {
    const containerId = container.id

    const errorText = document.querySelectorAll(`#${containerId} p`)
    const errorIcon = document.querySelectorAll(`#${containerId} img`)

    errorBox(container, true)

    if (error) {
      errorVisual(errorText, errorIcon, true)
    } else {
      errorVisual(errorText, errorIcon, false)
    }
  }