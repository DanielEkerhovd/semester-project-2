import buildProfile from '../components/profile.mjs'
import fetchUser from '../api/user/profile.mjs'
import listCard from '../components/listing/list_card.mjs'
import modal from '../handlers/auth/update_profile.mjs'


export default async function profile(loginStatus) {
  if (!loginStatus) {
    window.location.href = '/login/'
  };

  const param = new URLSearchParams(window.location.search);
  const user = param.get('user');

  const content = await fetchUser(user);
  const profileLists = await fetchUser(user, true);

  // Update title

  document.title = `BIDR | ${user}`;

  const listContent = profileLists.data;

  const profileContainer = document.getElementById('profile');
  const listingsContainer = document.getElementById('profile_list');
  
  listingsContainer.innerHTML = '';

  const profile = buildProfile(content);

  if (listContent.length === 0) {
    const noListings = document.createElement('p')
    noListings.classList.add(
      'text-center',
      'text-2xl',
      'font-text',
      'font-light',
      'col-span-full',
      'row-span-2',
      'my-32'
    )
    noListings.innerText = 'No active listings'
    listingsContainer.appendChild(noListings)
  } else {
    listContent.forEach((listing) => {
      const card = listCard(listing, loginStatus)
      listingsContainer.appendChild(card)
    })
  };

  profileContainer.appendChild(profile);

  if (user === localStorage.getItem('userName')) {
    modal(content);
  };
  
};