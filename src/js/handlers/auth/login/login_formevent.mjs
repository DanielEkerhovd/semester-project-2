import loginUser from '../../../handlers/auth/login_action.mjs';
import errorBox from '../../misc/errorbox.mjs';

export default function loginFormEvent() {

    const form = document.getElementById('login_form');
    const errorMessage = document.getElementById('error-box');

    
    if (form) {

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Resets error message
            errorBox(errorMessage, false);

            const email = document.getElementById('login_email');
            const password = document.getElementById('login_password');
            
            const emailValue = email.value;
            const passwordValue = password.value;

            try {
                
               await loginUser(emailValue.trim(), passwordValue.trim());

            } catch (error) {
                
                console.error(error);
                errorBox(errorMessage, true);

            }

            
        });


    }
}