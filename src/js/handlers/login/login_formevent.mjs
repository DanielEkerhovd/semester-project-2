import apiLogin from '../../api/user/login.mjs';

export default function loginFormEvent() {

    const form = document.getElementById('login_form');
    const errorMessage = document.getElementById('error-box');
    
    if (form) {

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            errorMessage.classList.add('hidden');
            errorMessage.classList.remove('flex');


            // const email = document.getElementById('login_email');
            // const password = document.getElementById('login_password');
            
            // const emailValue = email.value;
            // const passwordValue = password.value;
            // const loginUser = await apiLogin(emailValue, passwordValue);

            const dummyEmail = 'danielE@stud.noroff.no';
            const dummyPassword = 'Bergen12';

            try {

                const loginUser = await apiLogin(dummyEmail, dummyPassword);

                
                if (loginUser.error) {
                    console.log('Login failed');
                    errorMessage.classList.add('flex');
                    errorMessage.classList.remove('hidden');
                } else {
                    console.log('Login success');
                }




            } catch (error) {
                console.log(error);
            }

            
        });


    }
}