// Switch router
import login from '/src/js/page/auth/login.mjs';

const currentPath = window.location.pathname;
console.log(currentPath);

switch (currentPath) {

    // Login

    case '/login/':
        login();
        break;

}
