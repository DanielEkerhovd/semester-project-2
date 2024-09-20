export default function header(status) {

    const profileInfo = JSON.parse(localStorage.getItem('profile'));

    const header = document.createElement('header');
    header.classList.add('mt-5', 'w-11/12', 'xl:max-w-7xl', 'm-auto');

    // Upper header
    const upperHeader = document.createElement('div');
    upperHeader.classList.add('flex', 'justify-between', 'lg:justify-start', 'h-full', 'flex-wrap', 'items-center', 'flex-grow', 'gap-5');

    // Logo
    const logo = document.createElement('a');
    logo.href = '../';
    const logoImg = document.createElement('img');
    logoImg.src = '../src/media/logo/Logo.png';
    logoImg.alt = 'BIDR logo';
    logoImg.classList.add('h-full', 'object-contain');
    logo.appendChild(logoImg);

    // Search bar
    const searchBar = document.createElement('div');
    searchBar.classList.add('flex', 'justify-center', 'items-center', 'relative', 'order-last', 'md:order-none', 'h-12', 'w-full', 'md:max-w-2xl', 'md:w-auto', 'grow');
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search for an item';
    searchInput.classList.add('w-full', 'h-full', 'rounded-sm', 'px-3', 'bg-input-field');
    const searchButton = document.createElement('button');
    searchButton.type = 'submit';
    searchButton.classList.add('absolute', 'right-2', 'size-9', 'bg-highlight', 'rounded-sm', 'flex', 'justify-center', 'items-center');
    const searchIcon = document.createElement('img');
    searchIcon.src = '../src/media/icons/search.png';
    searchIcon.alt = 'Search icon';
    searchIcon.classList.add('size-6');
    searchButton.appendChild(searchIcon);
    searchBar.appendChild(searchInput);
    searchBar.appendChild(searchButton);

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

    console.log(status);
    if (status) {

        const create = document.createElement('a');
        create.href = '../create/';
        create.classList.add('hidden', 'md:block');
        const createIcon = document.createElement('img');
        createIcon.src = '../src/media/icons/hotbar/create-b.png';
        createIcon.alt = 'Create new listing icon';
        createIcon.classList.add('size-9');
        create.appendChild(createIcon);

        nav.appendChild(create);

        console.log(create);

        const profile = document.createElement('a');
        profile.href = '../profile/';
        const profileIcon = document.createElement('img');
        profileIcon.src = '../src/media/icons/hotbar/profile-b.png';
        profileIcon.alt = 'Profile icon';
        profileIcon.classList.add('size-9');
        profile.appendChild(profileIcon);

        const wallet = document.createElement('p');
        wallet.id = 'current_wallet';
        wallet.classList.add('font-text', 'font-semibold', 'text-sm', 'hidden');
        wallet.textContent = profileInfo.wallet;
        nav.appendChild(profile);
        nav.appendChild(wallet);



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
}



/* <header class="mt-5 w-11/12 xl:max-w-7xl m-auto">
      <!-- Upper header -->
      <div
        class="flex justify-between lg:justify-start h-full flex-wrap items-center flex-grow gap-5"
      >
        <a href="../" class=" ">
          <img
            src="../src/media/logo/Logo.png"
            alt="BIDR logo"
            class="h-full object-contain"
          />
        </a>
        <!-- Search bar -->
        <div
          class="flex justify-center items-center relative order-last md:order-none h-12 w-full max-w-2xl md:w-auto grow"
        >
          <input
            type="text"
            placeholder="Search for an item"
            class="w-full h-full rounded-sm px-3 bg-input-field"
          />

          <button
            type="submit"
            class="absolute right-2 size-9 bg-highlight rounded-sm flex justify-center items-center"
          >
            <img
              src="../src/media/icons/search.png"
              alt="Search icon"
              class="size-6"
            />
          </button>
        </div>
        <!-- Nav icons and economy -->
        <nav class="flex items-center gap-2 ml-auto">
          <a href="../listings/" class="hidden md:block">
            <img
              src="../src/media/icons/hotbar/browse-b.png"
              alt="Browse icon"
              class="size-9"
            />
          </a>
          <a href="#" class="hidden">
            <img
              src="../src/media/icons/hotbar/create-b.png"
              alt="Create new listing icon"
              class="size-9"
            />
          </a>
          <div class="flex items-center gap-2">
            <!-- Is gonna link to profile.html -->
            <a href="../login/" class="p-2 bg-black rounded-sm">
              <p class="text-white text-title font-semibold">Log in</p>
              <!-- <img
                src="../src/media/icons/hotbar/profile-b.png"
                alt="Profile icon"
                class="size-9"
              /> -->
            </a>
            <p
              id="current_wallet"
              class="font-text font-semibold text-sm hidden"
            ></p>
          </div>
        </nav>
      </div>
    </header> */