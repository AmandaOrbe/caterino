// = require_tree .
var unitPrice = Number(document.getElementById("precio").innerText);
var buttonNext = document.getElementById("button-next");
var diners = document.getElementById("comensales");
var price =document.getElementById("price");
var postreButton =document.getElementById("button-postre");
var f1 = document.getElementById("f1");
var step2 = document.getElementById("step2");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var formRight = document.getElementById("form-right");
var minPrice = unitPrice * 15;
var minimo = document.getElementById("minimo")
var minus = document.getElementById("minus")
var increase = document.getElementById("increase")
var decrease = document.getElementById("decrease")
var postreRadios = document.getElementsByName('postre')
var postreCards = document.querySelectorAll(".form__radio-group")
var postreTotal = document.getElementById("order-line-2__total")
var noPostre = document.getElementById("no-postre-radio")
var dinersNumber = Number(diners.value);
var menuPrice = dinersNumber * (unitPrice);
var menuPostrePrice = menuPrice + dinersNumber
var orderTotalStep2 = document.getElementById("order-line-total__total");
var menuNumberStep2 = document.getElementById("order-line-1__number");
var menuTotalStep2 = document.getElementById("order-line-1__total");
var noBebida = document.getElementById("no-bebida-radio");
var siBebida = document.getElementById("si-bebida-radio");


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
  minimo.style.opacity = 0;
}

var decreaseDiners  = function (event){
  if (Number(diners.value) > 15){
    var dinersNumber = Number(diners.value);
    diners.value = Number(document.getElementById("comensales").value) - 1;
  } else {
    minimo.style.opacity = 1;
  }

}

var updatePrices = function (event) {
    dinersNumber = Number(diners.value);
    menuPrice = dinersNumber * (unitPrice);
};

var updateStepOnePrice = function(){
  updatePrices();
  if (menuPrice >= minPrice ) {
    price.innerHTML = "Total " + menuPrice + " €";
    orderTotalStep2.innerHTML = menuPrice;
    menuNumberStep2.innerHTML = dinersNumber;
    menuTotalStep2.innerHTML = menuPrice;
  } else {
    price.innerHTML = "Total " + minPrice + " €";
  }
  minimoVisible();
  signColor();
}

var stepTwo = function (event) {
  f1.classList.add("hidden");
  f2.classList.remove("hidden");
  step2.classList.remove("hidden");
  formRight.classList.remove("hidden");
}

var stepThree = function (event) {
  f2.classList.add("hidden");
  f3.classList.remove("hidden");

}



var checkPostre = function(){
  postreRadios.forEach(function(postreRadio){
    if (postreRadio.checked && postreRadio.value != "no"){
      var checkedPostre = postreRadio.value;
      document.getElementById("order-line-2").classList.remove("transparent");
      document.getElementById("order-line-2__number").innerHTML = dinersNumber;
      document.getElementById("order-postre").innerHTML = checkedPostre;
      document.getElementById("order-line-2__total").innerHTML = dinersNumber + " €";
      orderTotalStep2.innerHTML = menuPostrePrice + " €"
    } else if (postreRadio.checked && postreRadio.value === "no"){
      document.getElementById("order-line-2").classList.add("transparent");
      orderTotalStep2.innerHTML = menuPrice + " €"
    }
  })
}


diners.addEventListener("keyup", updateStepOnePrice);
window.addEventListener("click", updateStepOnePrice);

postreCards.forEach(function(postreCard) {
  postreCard.addEventListener("change", checkPostre)
});

noPostre.addEventListener("change", checkPostre)

window.addEventListener("DOMContentLoaded", updateStepOnePrice);

buttonNext.addEventListener("click", stepTwo);
postreButton.addEventListener("click", stepThree);

increase.addEventListener("click", increaseDiners);
decrease.addEventListener("click", decreaseDiners);
// postre.addEventListener("onChange", function(event){
//   if postre
// }
