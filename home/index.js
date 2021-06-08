//less/minus buttons(-)

const minBtnArr = document.querySelectorAll(".less");
const moreBtnArr = document.querySelectorAll(".more");

const greetings = document.querySelector('#account-name');
//fetching data from other page/database : user info if logged in.
//getting data on the current user logged in
let auth = 'Bearer ' + localStorage['jwt'];
let currentUser = {};
fetch('http://localhost:1337/users/me', {
    method: 'GET',
    headers: {
      /*
      'Content-Type': 'application/json',
      'Connection' : 'keep-alive',
      */
      'Authorization': auth,
      }
    })
    .then(data => {
        if (!data.ok) {
          throw Error(data.status);
        }
        return data.json();
        }).then(credential => {
//        console.log(credential);
        currentUser = credential;
        localStorage['currentuser'] = currentUser;
        greetings.innerHTML = "Halo, " + currentUser.firstname;
        }).catch(e => {
        console.log(e);
        });


//Page Functionality
const itemDetail = function(id, quant, price) {
  this.id = id;
  this.quantity = quant;
  this.price = price;
  this.totalPrice = price * quant;
}

let customerOrders = [];
                    //[new ItemDetail(1, 2, 2000), new ItemDetail(2, 3, 5000)]

minBtnArr.forEach(element => {
  element.addEventListener("click", () => {
    a = element.parentElement.querySelector(".count");
    a.innerHTML = parseInt(a.innerHTML) - 1;
//    console.log("less2");
  })
});
moreBtnArr.forEach(element => {
  element.addEventListener("click", () => {
    b = element.parentElement.querySelector(".count");
    b.innerHTML = parseInt(b.innerHTML) + 1;
//    console.log("more2");
  })
});

const logoutButton = document.querySelector("#logout-btn");
logoutButton.addEventListener("click", () => {
  localStorage['currentuser'] = '';
  localStorage['jwt'] = '';
  window.location.replace("../home");
})

//change display
loggedInBtns = document.querySelector('.logged-in');
loggedOutBtns = document.querySelector('.logged-out');
if(localStorage['currentuser'] == '') {

}