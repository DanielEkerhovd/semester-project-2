// Switch router
import login from '/src/js/page/auth/login.mjs';
import register from '/src/js/page/auth/register.mjs';
import homepage from '/src/js/page/home/homepage.mjs';
import listings from './page/listings.mjs';
import item from './page/listing_item.mjs';
import profile from './page/profile.mjs';


import header from './components/header.mjs';
import loginCheck from './handlers/misc/login_check.mjs';
import updateUser from './handlers/auth/update_user.mjs';

const currentPath = window.location.pathname;

const loggedIn = await loginCheck();

updateUser();


switch (currentPath) {

    case '/':
    case '/index.html':
        header(loggedIn);
        homepage();
        break;
    case '/login/':
        login();
        break;
    case '/register/':
        register();
        break;
    case '/profile/':
        header(loggedIn);
        profile(loggedIn);
        break;
    case '/listings/':
        header(loggedIn);
        listings();
        break;
    case '/listing/':
        header(loggedIn);
        item(loggedIn);
        break;
};