import buildProfile from '../components/profile.mjs'
import fetchUser from '../api/user/profile.mjs'

export default async function profile(loginStatus) {
  if (!loginStatus) {
    window.location.href = '/login/'
  }

  const param = new URLSearchParams(window.location.search)
  const user = param.get('user')

  const content = await fetchUser(user)

  const profileContainer = document.getElementById('profile')

  const profile = buildProfile(content)

  profileContainer.appendChild(profile)
}
