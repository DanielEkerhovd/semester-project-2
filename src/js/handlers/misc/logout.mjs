export default function logOut(button) {

  if (button) {
    button.addEventListener('click', async () => {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('profile')
      localStorage.removeItem('userName')
      localStorage.removeItem('apiKey')

      window.location.href = '/'
    })
  }
}
