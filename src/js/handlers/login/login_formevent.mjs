import apiLogin from '../../api/user/login.mjs';
import errorBox from '../misc/errorbox.mjs';

export default function loginFormEvent() {

    const form = document.getElementById('login_form');
    const errorMessage = document.getElementById('error-box');
    
    if (form) {

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Resets error message
            await errorBox(errorMessage, false);


            const email = document.getElementById('login_email');
            const password = document.getElementById('login_password');
            
            const emailValue = email.value;
            const passwordValue = password.value;

            try {

                const loginUser = await apiLogin(emailValue, passwordValue);
                const data = loginUser.data;

                // Sets local storage
                const { token, ...profile } = data;

                localStorage.setItem('accessToken', token);
                localStorage.setItem('profile', JSON.stringify(profile));

                // Redirects to dashboard
                window.location.href = '/';


            } catch (error) {
                
                console.error(error);
                errorBox(errorMessage);

            }

            
        });


    }
}