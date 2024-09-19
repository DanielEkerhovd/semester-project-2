// Switch router
import login from '/src/js/page/auth/login.mjs';
import register from '/src/js/page/auth/register.mjs';
import homepage from '/src/js/page/home/homepage.mjs';
import listings from './page/listings.mjs';

import logOut from './handlers/misc/logout.mjs';

const currentPath = window.location.pathname;
console.info('Current path for switch: ' + currentPath);

switch (currentPath) {

    // Login

    case '/':
    case '/index.html':
        homepage();
        break;
    case '/login/':
        login();
        break;
    case '/register/':
        register();
        break;
    case '/profile/':
        // Put logout in the page folder of profile??
        logOut();
        break;
    case '/listings/':
        listings();
        break;
};
