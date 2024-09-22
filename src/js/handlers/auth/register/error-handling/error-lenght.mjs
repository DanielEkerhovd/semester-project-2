import errorBox from "../../../misc/errorbox.mjs"
import errorUX from "./error-ux.mjs"

export default function inputLenght(inputValue, container, error = false) {
    if (inputValue.length > 0) {
      errorUX(container, error)
    } else {
      errorBox(container, error)
    }
  }