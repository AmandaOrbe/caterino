// = require_tree .
var unitPrice = Number(document.getElementById("precio").innerText);
var diners = document.getElementById("comensales");
var priceButton =document.getElementById("button-price");
var postreButton =document.getElementById("button-postre");
var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var minPrice = unitPrice * 15;


var updatePrice = function (event) {
    var dinersNumber = Number(diners.value);
    // var postre = document.getElementById("postre").checked;
    // var i = postre ? 1 : 0;
    var calculatedPrice = dinersNumber * (unitPrice  );
    // console.log(i);
    if (calculatedPrice >= minPrice ) {
    priceButton.innerHTML = "Total " + calculatedPrice + " €";
  } else {
    priceButton.innerHTML = "Total " + minPrice + " €";
  }
};

var stepTwo = function (event) {
  f1.classList.add("hidden");
  f2.classList.remove("hidden");
}

var stepThree = function (event) {
  f2.classList.add("hidden");
  f3.classList.remove("hidden");
}

// console.log(finalPrice);

diners.addEventListener("keyup", updatePrice);
window.addEventListener("click", updatePrice);
window.addEventListener("DOMContentLoaded", updatePrice);

priceButton.addEventListener("click", stepTwo);
postreButton.addEventListener("click", stepThree);
// postre.addEventListener("onChange", function(event){
//   if postre
// }
