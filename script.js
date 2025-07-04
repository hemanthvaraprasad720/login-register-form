const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

function showLogin() {
  loginForm.classList.remove('d-none');
  registerForm.classList.add('d-none');
}

function showRegister() {
  registerForm.classList.remove('d-none');
  loginForm.classList.add('d-none');
}

function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === 'password' ? 'text' : 'password';
}

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (email && password.length >= 6) {
    alert('Login Successful!');
    // Clear form after login
    loginForm.reset();
  } else {
    alert('Invalid credentials. Password must be 6 characters.!');
  }
});

registerForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const pass = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirm').value;

  if (pass !== confirm) {
    alert('Passwords do not match!');
  } else if (pass.length < 6) {
    alert('Password must be at least 6 characters.');
  } else {
    alert('Registration Successful!');
    registerForm.reset();    
    showLogin();            
  }
});
