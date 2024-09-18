import loginEvent from '../../handlers/auth/login/login_formevent.mjs';
import passwordVisibility from '../../handlers/auth/password-visibility.mjs';

export default function login() {

    loginEvent();    

    // Password visibility

    const passwordInput = document.getElementById('login_password');
    const passwordButton = document.querySelector('#password-hide img');

    console.log(passwordInput, passwordButton);

    passwordVisibility(passwordInput, passwordButton);

};