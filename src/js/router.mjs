// Switch router
import login from '/src/js/page/auth/login.mjs';
import register from '/src/js/page/auth/register.mjs';
import homepage from '/src/js/page/home/homepage.mjs';
import listings from './page/listings.mjs';
import item from './page/listing_item.mjs';
import header from './components/header.mjs';

import loginCheck from './handlers/misc/login_check.mjs';
import logOut from './handlers/misc/logout.mjs';

const currentPath = window.location.pathname;
console.info('Current path for switch: ' + currentPath);

const loggedIn = await loginCheck();


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
        // Put logout in the page folder of profile??
        logOut();
        break;
    case '/listings/':
        header(loggedIn);
        listings();
        break;
    case '/listing/':
        header(loggedIn);
        item();
        break;
};
