// = require_tree .
var unitPrice = Number(document.getElementById("precio").innerText);
var diners = document.getElementById("comensales");
var priceButton =document.getElementById("button-price");
var minPrice = unitPrice * 15;


var updatePrice = function (event) {
    var dinersNumber = Number(diners.value);
    var postre = document.getElementById("postre").checked;
    var i = postre ? 1 : 0;
    var calculatedPrice = dinersNumber * (unitPrice + i );
    console.log(i);
    if (calculatedPrice >= minPrice ) {
    priceButton.innerHTML = "Total " + calculatedPrice + " €";
  } else {
    priceButton.innerHTML = "Total " + minPrice + " €";
  }
};

// console.log(finalPrice);

diners.addEventListener("keyup", updatePrice);
window.addEventListener("click", updatePrice);
window.addEventListener("DOMContentLoaded", updatePrice);


// postre.addEventListener("onChange", function(event){
//   if postre
// }
