/**
 * Procedural Code
 *
 * Basics of our application:
 * - We want to listen for a submission of our login form.
 * - Get the values the user enters (username, password).
 * - Validate the inputs and correctly handle errors.
 * - At the end, create a new User object and log it to the console.
 * */

console.log('Procedural Code Loaded');

const form = document.getElementById('user-input');

function signupHandler(event) {
    event.preventDefault(); // Prevent browser default of sending form to server
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const usernameEntry = usernameInput.value;
    const passwordEntry = passwordInput.value;

    if (usernameEntry.trim().length == 0) {
        alert('Invalid input - username must not be empty.');
        return;
    }

    if (!passwordEntry.trim().length >= 6) {
        alert('Invalid input - password must be 6 characters or longer.');
        return;
    }

    const user = {
        username: usernameEntry,
        password: passwordEntry,
    };

    console.log(user);
    return user;
}

form.addEventListener('submit', signupHandler);
