// = require_tree .
var unitPrice = Number(document.getElementById("precio").innerText);
var diners = document.getElementById("comensales");

var priceButton =document.getElementById("button-price");


// console.log(finalPrice);

diners.addEventListener("change", function(event){

  var dinersNumber = Number(diners.value);
  var finalPrice = dinersNumber * unitPrice;
  console.log(finalPrice);
  priceButton.innerHTML = finalPrice + " euros"

});
