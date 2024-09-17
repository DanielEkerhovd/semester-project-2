export default async function login(apiCall) {

    // Get the form element from the DOM

    const form = document.querySelector('.login_form');
    const email = form.querySelector('.login_email');
    const password = form.querySelector('.login_password');

    // Fetch the information from the form

    const emailValue = email.value;
    const passwordValue = password.value;

    // Call the API function

  
    const response = await apiCall(emailValue, passwordValue);
};