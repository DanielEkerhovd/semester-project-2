export default function errorVisual(text, icon, error = false) {
    if (error) {
      text.forEach((t) => {
        t.classList.add('text-error')
        t.classList.remove('text-success')
      })

      icon.forEach((i) => {
        i.src = '../src/media/icons/error-handling/error.png'
      })
    } else {
      text.forEach((t) => {
        t.classList.add('text-success')
        t.classList.remove('text-error')
      })

      icon.forEach((i) => {
        i.src = '../src/media/icons/error-handling/correct.png'
      })
    }
  }