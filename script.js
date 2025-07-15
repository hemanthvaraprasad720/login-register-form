const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const alertBox = document.getElementById('alertBox');

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

// ✅ Custom Alert Function
function showAlert(message, type = "success") {
  alertBox.innerText = message;
  alertBox.className = `alert alert-${type}`; // eg: alert-success, alert-danger
  alertBox.classList.remove('d-none');

  setTimeout(() => {
    alertBox.classList.add('d-none');
  }, 3000);
}

// ✅ Login Form Logic
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (email && password.length >= 6) {
    showAlert("✅ Login successful!", "success");
    loginForm.reset();
  } else {
    showAlert('❌ Invalid credentials. Password must be at least 6 characters!', "danger");
  }
});

// ✅ Register Form Logic
registerForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const pass = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirm').value;

  if (pass !== confirm) {
    showAlert('❌ Passwords do not match!', "danger");
  } else if (pass.length < 6) {
    showAlert('❌ Password must be at least 6 characters.', "danger");
  } else {
    showAlert('✅ Registration Successful!', "success");
    registerForm.reset();
    showLogin();
  }
});
