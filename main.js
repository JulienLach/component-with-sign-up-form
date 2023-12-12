document.getElementById('submit-btn').addEventListener('click', function (event) {

    event.preventDefault();
    const firstName = document.querySelector('.first-name').value;
    const lastName = document.querySelector('.last-name').value;
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    const firstNameError = document.querySelector('.first-name-error');
    const lastNameError = document.querySelector('.last-name-error');
    const emailError = document.querySelector('.email-error');
    const passwordError = document.querySelector('.password-error');

    if (firstName === '') {
        firstNameError.classList.add('active')
        document.querySelector('.first-name').style.border = '2px solid hwb(0 48% 0%)';
        document.querySelector('.first-name').classList.add('placeholder-error');

    }

    if (lastName === '') {
        lastNameError.classList.add('active')
        document.querySelector('.last-name').style.border = '2px solid hwb(0 48% 0%)';
        document.querySelector('.last-name').classList.add('placeholder-error');
    }

    if (email === '') {
        emailError.classList.add('active')
        document.querySelector('.email').style.border = '2px solid hwb(0 48% 0%)';
        document.querySelector('.email').classList.add('placeholder-error');
    }

    if (password === '') {
        passwordError.classList.add('active')
        document.querySelector('.password').style.border = '2px solid hwb(0 48% 0%)';
        document.querySelector('.password').classList.add('placeholder-error');
    }


});