//Fix label click focus
const formOrder = ['name', 'username', 'email', 'password', 'confirm'];
const labels = document.getElementsByClassName('label');

let i = 0;
for (const item of formOrder) {
  labels[i].addEventListener('click', () => {
    document.getElementById(item).focus();
  });
  i++;
}
//-----------------------

//Validate password, handle submit-btn enable, and give feedback to user
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm');
const submitBtn = document.getElementById('submit');

password.addEventListener('input', e => {
  if (password.value.length > 0 && password.value.length < 7) {
    password.classList.add('invalid-password');
  } else {
    password.classList.remove('invalid-password');
  }
});
confirmPassword.addEventListener('input', e => {
  if (confirmPassword.value.length > 0) {
    if (confirmPassword.value !== password.value) {
      confirmPassword.classList.add('invalid-password');
      submitBtn.disabled = true;
    } else if (
      confirmPassword.value === password.value &&
      confirmPassword.value.length > 7 &&
      password.value.length > 7
    ) {
      confirmPassword.classList.remove('invalid-password');
      password.classList.remove('invalid-password');
      submitBtn.disabled = false;
    }
  } else {
    confirmPassword.classList.remove('invalid-password');
  }
});
//-------------------------------------------

//Handle submit validation
const form = document.getElementById('form');

const name = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log({
    name: name.value,
    username: username.value,
    email: email.value,
    password: password.value,
  });
});

//-----------------
