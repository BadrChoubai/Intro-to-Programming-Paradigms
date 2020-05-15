/**
 * Object Oriented Programming Code
 *
 * Let's think about our application in an
 * object-oriented way.
 *
 * What objects could we work with?
 * - Our form
 * - The form validation logic
 * - The User we create in the end
 */

class FormValidator {
    static REQUIRED = 'REQUIRED';
    static MIN_LENGTH = 'MIN_LENGTH';

    static validate(value, flag, validatorValue) {
        if (flag === this.REQUIRED) {
            return value.trim().length > 0;
        }

        if (flag === this.MIN_LENGTH) {
            return value.trim().length >= validatorValue;
        }
    }
}

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    greet() {
        console.log(`Hi! I am ${this.username}.`);
    }
}

class UserInputForm {
    constructor() {
        this.form = document.getElementById('user-input');
        this.usernameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('password');

        this.form.addEventListener('submit', this.signupHandler);
    }

    signupHandler = event => {
        event.preventDefault();
        const usernameEntry = this.usernameInput.value;
        const passwordEntry = this.passwordInput.value;

        if (
            !FormValidator.validate(usernameEntry, FormValidator.REQUIRED) ||
            !FormValidator.validate(passwordEntry, FormValidator.MIN_LENGTH, 6)
        ) {
            alert(
                'Username or Password is incorrect. (password should have a minimum of six characters.)',
            );
            return;
        }

        const newUser = new User(
            (username = usernameEntry),
            (password = passwordEntry),
        );
        return newUser.greet();
    };
}

new UserInputForm();
