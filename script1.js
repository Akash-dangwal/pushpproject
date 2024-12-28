let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});
const loginForm = document.querySelector('.login form');
const registerForm = document.querySelector('.register form');
const loginButton = document.querySelector('.login-btn');
const registerButton = document.querySelector('.register-btn');
const popupMessage = document.getElementById('popupMessage');
const popupText = document.getElementById('popupText');
const closePopupButton = document.getElementById('closePopupButton');

// Toggle between login and registration forms
loginButton.addEventListener('click', () => {
    document.querySelector('.login').style.display = 'block';
    document.querySelector('.register').style.display = 'none';
});

registerButton.addEventListener('click', () => {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.register').style.display = 'block';
});

// Register form submission
registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Store the user data in localStorage (if not already registered)
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === username);

    if (!userExists) {
        const newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Show popup message after successful registration
        popupText.textContent = 'Registration successful!';
        popupMessage.style.display = 'block';
        setTimeout(() => {
            popupMessage.style.display = 'none';
        }, 2000);
        
        // Clear the form
        registerForm.reset();
    } else {
        popupText.textContent = 'Username already taken.';
        popupMessage.style.display = 'block';
    }
});

