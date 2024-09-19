// Switch router
import login from '/src/js/page/auth/login.mjs';
import register from '/src/js/page/auth/register.mjs';

import logOut from './handlers/misc/logout.mjs';

const currentPath = window.location.pathname;
console.info('Current path for switch: ' + currentPath);

switch (currentPath) {

    // Login

    case '/login/':
        login();
        break;
    case '/register/':
        register();
        break;
    case '/profile/':
        logOut();
        break;
};
