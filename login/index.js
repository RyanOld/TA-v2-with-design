
//--------------------------------------------------------------------

const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

const loginBtn = document.querySelector(".login-btn");

setInterval(() => {
  username = usernameInput.innerHTML;
  password = passwordInput.innerHTML;
//  console.log(username);
//  console.log(password);
}, 100);

let xhr = new XMLHttpRequest();
loginBtn.addEventListener(onclick, (event) => {
  event.preventDefault();
  console.log(event);
  if(username != "" && password != "") {
    xhr = new XMLHttpRequest();
//    xhr.onreadystatechange = function() {
//      if (this.readyState == 4 && this.status == 200) {
//      document.getElementById("demo").innerHTML = this.responseText;
//        console.log(this.responseText);
//      }
//    };
    xhr.open("POST", "../home/index.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("username=" + username + "&password=" + password);
    
  }
})
