// Switch router
import login from '/src/js/page/auth/login.mjs';

const currentPath = window.location.pathname;
console.info('Current path for switch: ' + currentPath);

switch (currentPath) {

    // Login

    case '/login/':
        login();
        break;

}
