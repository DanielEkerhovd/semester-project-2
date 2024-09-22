import createFooter from './footer.mjs';
import createNewListing from '../components/listing/create_modal.mjs';
import handleListing from '../handlers/new_listing.mjs';
import updateUser from '../handlers/auth/update_user.mjs';

import search from '../handlers/sort/search.mjs';

export default function header(status) {
  if (status) {
    updateUser();
  }

  const header = document.createElement('header');
  header.classList.add('mt-5', 'w-11/12', 'xl:max-w-7xl', 'm-auto');

  // Upper header
  const upperHeader = document.createElement('div');
  upperHeader.classList.add(
    'flex',
    'justify-between',
    'lg:justify-start',
    'h-full',
    'flex-wrap',
    'items-center',
    'flex-grow',
    'gap-5',
  );

  // Logo
  const logo = document.createElement('a');
  logo.classList.add('h-12');
  logo.href = '../';
  const logoImg = document.createElement('img');
  logoImg.src = '../src/media/logo/Logo.png';
  logoImg.alt = 'BIDR logo';
  logoImg.classList.add('h-full', 'object-cover');
  logo.appendChild(logoImg);

  // Search bar
  const searchBar = document.createElement('form');
  searchBar.id = 'search_form';
  searchBar.classList.add(
    'flex',
    'justify-center',
    'items-center',
    'relative',
    'order-last',
    'md:order-none',
    'h-12',
    'w-full',
    'md:max-w-2xl',
    'md:w-auto',
    'grow',
  );
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.id = 'search_input';
  searchInput.placeholder = 'Search for an item';
  searchInput.classList.add(
    'w-full',
    'h-full',
    'rounded-sm',
    'px-3',
    'bg-input-field',
  );
  const searchButton = document.createElement('button');
  searchButton.type = 'submit';
  searchButton.id = 'search_button';
  searchButton.classList.add(
    'absolute',
    'right-2',
    'size-9',
    'bg-highlight',
    'rounded-sm',
    'flex',
    'justify-center',
    'items-center',
    'cursor-pointer',
  );
  const searchIcon = document.createElement('img');
  searchIcon.src = '../src/media/icons/search.png';
  searchIcon.alt = 'Search icon';
  searchIcon.classList.add('size-6');
  searchButton.appendChild(searchIcon);
  searchBar.appendChild(searchInput);
  searchBar.appendChild(searchButton);

  const currentPage = window.location.pathname;
  if (currentPage === '/listings/') {
    searchInput.value = new URLSearchParams(window.location.search).get('q');
  }

  // Nav icons and economy
  const nav = document.createElement('nav');
  nav.classList.add('flex', 'items-center', 'gap-2', 'ml-auto');
  const browse = document.createElement('a');
  browse.href = '../listings/';
  browse.classList.add('hidden', 'md:block');
  const browseIcon = document.createElement('img');
  browseIcon.src = '../src/media/icons/hotbar/browse-b.png';
  browseIcon.alt = 'Browse icon';
  browseIcon.classList.add('size-9');

  if (status) {
    const profileInfo = JSON.parse(localStorage.getItem('profile'));

    const name = profileInfo.name;
    const credits = profileInfo.credits;

    const create = document.createElement('div');
    create.id = 'create_listing_1';
    create.classList.add('hidden', 'md:block', 'cursor-pointer');
    const createIcon = document.createElement('img');
    createIcon.src = '../src/media/icons/hotbar/create-b.png';
    createIcon.alt = 'Create new listing icon';
    createIcon.classList.add('size-9');
    create.appendChild(createIcon);

    nav.appendChild(create);

    const profile = document.createElement('a');
    profile.href = `../profile/?user=${name}`;
    const profileIcon = document.createElement('img');
    profileIcon.src = '../src/media/icons/hotbar/profile-b.png';
    profileIcon.alt = 'Profile icon';
    profileIcon.classList.add('size-9');
    profile.appendChild(profileIcon);

    const wallet = document.createElement('div');
    wallet.classList.add(
      'bg-highlight',
      'p-2',
      'rounded-sm',
      'font-text',
      'font-semibold',
      'text-sm',
    );

    const walletText = document.createElement('p');
    walletText.id = 'current_wallet';
    walletText.textContent = credits + '$';

    wallet.appendChild(walletText);
    nav.appendChild(profile);
    nav.appendChild(wallet);

    const newListingModal = createNewListing();

    document.body.appendChild(newListingModal);

    create.addEventListener('click', () => {
      newListingModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  } else {
    const login = document.createElement('a');
    login.href = '../login/';
    login.classList.add('p-2', 'bg-black', 'rounded-sm');
    const loginText = document.createElement('p');
    loginText.classList.add('text-white', 'text-title', 'font-semibold');
    loginText.textContent = 'Log in';
    login.appendChild(loginText);

    nav.appendChild(login);
  }

  browse.appendChild(browseIcon);
  nav.prepend(browse);

  upperHeader.appendChild(logo);
  upperHeader.appendChild(searchBar);
  upperHeader.appendChild(nav);

  header.appendChild(upperHeader);

  // Apprend to the top of the body
  document.body.insertBefore(header, document.body.firstChild);

  createFooter(status);

  handleListing();
  search();
}
