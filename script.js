function setActiveForm(formId) {
    const container = document.getElementById('container');
    if (formId === 'login-form') {
        container.classList.remove('right-panel-active');
    } else {
        container.classList.add('right-panel-active');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Implement your login logic here
    console.log('Login:', username, password);
}

function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Implement your signup logic here
    console.log('Signup:', username, password);
}
