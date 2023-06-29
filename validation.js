const form = document.getElementById('frm');
const error = document.querySelector('.error');
const email = form.elements['email'];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateEmail()) {
        form.submit();
        //email.classList.add('valid');
        //email.classList.remove('invalid');
    }
    else {
        error.innerHTML = 'Only lower case characters are allowed!';
        //email.classList.add('invalid');
        //email.classList.remove('valid');
    }
});

function validateEmail() {       
    return isLowerCaseStr(email.value);
}

function isLowerCaseStr(str) {    
    return str === String(str).toLowerCase();
}