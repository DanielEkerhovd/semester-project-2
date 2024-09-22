import apiLogin from '../../api/user/login.mjs';
import fetchProfile from '../../api/user/profile.mjs';
import createKey  from '../../api/user/api_key.mjs';

export default async function loginUser(emailValue, passwordValue) {
  const loginUser = await apiLogin(emailValue, passwordValue);

  const name = loginUser.data.name;
  localStorage.setItem('userName', name);

  // Sets local storage
  const token = loginUser.data.accessToken;
  localStorage.setItem('accessToken', token);
  

  // Create key
  const key = await createKey();
  localStorage.setItem('apiKey', key.data.key);

  // Fetches profile
  const profile = await fetchProfile();
  localStorage.setItem('profile', JSON.stringify(profile.data));
  
  // Redirects to dashboard
  window.location.href = '/'
}
