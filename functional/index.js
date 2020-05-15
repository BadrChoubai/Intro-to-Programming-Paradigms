/**
 * Functional Programming Code
 *
 * Like object oriented we think of our code in parts but,
 * we structure it as different logical blocks.
 *
 */

const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

const validateUserInput = (value, flag, validatorValue) => {
    if (flag === REQUIRED) {
        return value.trim().length > 0;
    }

    if (flag === MIN_LENGTH) {
        return value.trim().length >= validatorValue;
    }
};

const createUser = (usernameEntry, passwordEntry) => {
    if (
        !validateUserInput(usernameEntry, REQUIRED) ||
        !validateUserInput(passwordEntry, MIN_LENGTH, 6)
    ) {
        throw new Error(
            'Username or Password is incorrect. (password should have a minimum of six characters.)',
        );
    }

    return {
        username: usernameEntry,
        password: passwordEntry,
    };
};

const greetUser = ({ username }) => {
    console.log(`Hi! I am ${username}.`);
};

const getUserInput = inputElementId => {
    return document.getElementById(inputElementId).value;
};

// handle form submissions
const signupHandler = event => {
    event.preventDefault();

    const usernameEntry = getUserInput('username');
    const passwordEntry = getUserInput('password');

    try {
        const newUser = createUser(usernameEntry, passwordEntry);
        console.log(newUser);
        greetUser(newUser);
    } catch (error) {
        alert(error.message);
    }
};

// Get access to the form
const connectForm = (formId, formSubmitHandler) => {
    const form = document.getElementById(formId);
    form.addEventListener('submit', formSubmitHandler);
};

connectForm('user-input', signupHandler);
