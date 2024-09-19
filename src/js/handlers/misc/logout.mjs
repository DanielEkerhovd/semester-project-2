export default function logOut() {
  const logoutButton = document.getElementById('logout_button')

  if (logoutButton) {
    logoutButton.addEventListener('click', async () => {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('profile')

      window.location.href = '/'
    })
  }
}
