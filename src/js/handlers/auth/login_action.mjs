import apiLogin from '../../api/user/login.mjs';

export default async function loginUser(emailValue, passwordValue) {
  const loginUser = await apiLogin(emailValue, passwordValue)
  const data = loginUser.data

  // Sets local storage
  const { accessToken, ...profile } = data;

  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('profile', JSON.stringify(profile))

  // Redirects to dashboard
  window.location.href = '/'
}
