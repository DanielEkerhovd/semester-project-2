import registerUser from '../../../api/user/register.mjs';
import loginUser from '../login_action.mjs';
import errorBox from '../../misc/errorbox.mjs'
import inputErrorHandling from '../register/inputErrorHandling.mjs';


export default function register() {

    const form = document.getElementById('register_form');
    const inputs = Array.from(form.querySelectorAll('input'));

    const errorContainer = document.getElementById('error-box');

    // Error handling

    inputErrorHandling(inputs);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        errorBox(errorContainer, false);

        const data = {};

        inputs.forEach(input => {
            data[input.name] = input.value;
        });

        try {

            const register = await registerUser(data);

            localStorage.clear();

            const { email, password } = data;

            const login = await loginUser(email.trim(), password.trim());
            

        } catch (error) {
            
            errorBox(errorContainer);
        }


    });
    

}