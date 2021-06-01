//After this is code for the web functionality
//less/minus buttons(-)

let minBtnArr = document.querySelectorAll(".less");
let moreBtnArr = document.querySelectorAll(".more");

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
/*
setInterval(() => {
  document.querySelectorAll(".count").forEach(element => {
    if(element.innerHTML != 0) {
    a = element.parentElement.parentElement.querySelector(".price").innerHTML;
    customerOrders[customerOrders.length] = new itemDetail(customerOrder.length, element, a);
    }
  });
}, 100);
*/