// = require_tree .
var unitPrice = Number(document.getElementById("precio").innerText);
var buttonNext = document.getElementById("button-next");
var diners = document.getElementById("comensales");
var price =document.getElementById("price");
var postreButton =document.getElementById("button-postre");
var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var minPrice = unitPrice * 15;
var minimo = document.getElementById("minimo")
var minus = document.getElementById("minus")
var increase = document.getElementById("increase")
var decrease = document.getElementById("decrease")


var minimoVisible = function( event){
 if (Number(diners.value) < 15) {
  minimo.style.opacity = 1;
 }
}

var signColor = function(){
  if (Number(diners.value) > 15){
      minus.style.fill="#FDD000";
  } else {
     minus.style.fill="#BCBABA";
  }
}

var increaseDiners  = function (event){
  var dinersNumber = Number(diners.value);
  diners.value = Number(document.getElementById("comensales").value) + 1;
}

var decreaseDiners  = function (event){
  if (Number(diners.value) > 15){
    var dinersNumber = Number(diners.value);
    diners.value = Number(document.getElementById("comensales").value) - 1;
  } else {
    minimo.style.opacity = 1;
  }
}

var updatePrice = function (event) {
    var dinersNumber = Number(diners.value);
    // var postre = document.getElementById("postre").checked;
    // var i = postre ? 1 : 0;
    var calculatedPrice = dinersNumber * (unitPrice  );
    // console.log(i);
    if (calculatedPrice >= minPrice ) {
    price.innerHTML = "Total " + calculatedPrice + " €";
  } else {
    price.innerHTML = "Total " + minPrice + " €";
  }
  minimoVisible();
  signColor();
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

buttonNext.addEventListener("click", stepTwo);
postreButton.addEventListener("click", stepThree);

increase.addEventListener("click", increaseDiners);
decrease.addEventListener("click", decreaseDiners);
// postre.addEventListener("onChange", function(event){
//   if postre
// }
