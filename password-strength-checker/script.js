 const inputField = document.querySelector('#password')
 const outputField = document.querySelector('#output')
 inputField.addEventListener('input', function() { 
    let password = inputField.value;
    if(password.length < 8) {
        outputField.innerText = 'Password is too short';
        outputField.style.color = 'red';
    } else {
        outputField.innerText = 'Password length is sufficient';
        outputField.style.color = 'green';
        if(password.search(/[A-Z]/) == -1) {
            outputField.innerText += 'Add at least one uppercase letter';
            outputField.style.color = 'red';
        } else if(password.search(/[a-z]/) == -1) { 
            outputField.innerText += 'Add at least one lowercase letter';
            outputField.style.color = 'red';
        } else if(password.search(/[0-9]/) == -1) {
            outputField.innerText = 'Add atleast one digit';
            outputField.style.color = 'red';
        } else if(password.search(/[\!\@\#\$\%\^\&\*\(\)]/) == -1) {
            outputField.innerText = 'Add atleast one special character (!,@,#,$,%,^,&,*,(,))';
            outputField.style.color = 'red';
        } else {
            outputField.innerText = 'Strong Password!';
        }
    }
 })