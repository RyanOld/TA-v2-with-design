const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confpassInput = document.querySelector('#confirm-password');
const cellphoneInput = document.querySelector('#cellphone');
const firstnameInput = document.querySelector('#first-name');
const lastnameInput = document.querySelector('#last-name');

const signupBtn = document.querySelector(".signup-btn");

localStorage['jwt'] = '';
localStorage['currentuser'] = {};

let inputs = {};

signupBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if(passwordInput.value == confpassInput.value) {
    inputs = {
    "username" : usernameInput.value,
    "email" : emailInput.value,
    "password" : passwordInput.value,
    "cellphone" : cellphoneInput.value,
    "firstname" : firstnameInput.value,
    "lastname" : lastnameInput.value,
    }

    options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Connection' : 'keep-alive',
      /*
      'Authorization': 'Bearer aqsdqwwqeqwe(jwt)',
      */
      },
    body: JSON.stringify(inputs),
    };

    fetch('http://localhost:1337/auth/local/register', options)
    .then(data => {
        if (!data.ok) {
          throw Error(data.status);
        }
        return data.json();
        }).then(credential => {
        console.log(credential);
        jwt = credential["jwt"];
//        console.log(jwt); //no problem here
        localStorage['jwt'] = jwt; // only strings
        jwtToken = localStorage['jwt'] || '';
//        console.log(jwtToken); //no problem here
        window.location.replace("../login");
        return false; 
        }).catch(e => {
        console.log(e);
        });
  } else {
    alert("Konfirmasi password tidak sama dengan password");
  }
})