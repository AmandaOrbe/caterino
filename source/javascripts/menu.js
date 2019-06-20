
var unitPrice = Number(document.getElementById("precio").innerText);
var buttonNext = document.getElementById("button-next");
var diners = document.getElementById("comensales");
var price =document.getElementById("price");
var postreButton =document.getElementById("button-postre");
var bebidaButton =document.getElementById("button-bebida");
var datosButton =document.getElementById("button-datos");
var f1 = document.getElementById("f1");
var step2 = document.getElementById("step2");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");
var formRight = document.getElementById("form-right");
var minPrice = unitPrice * 15;
var minimo = document.getElementById("minimo")
var minus = document.getElementById("minus")
var increase = document.getElementById("increase")
var decrease = document.getElementById("decrease")
var postreRadios = document.getElementsByName('postre')
var bebidaRadios = document.getElementsByName('bebida')
var postreCards = document.querySelectorAll(".form__radio-group")
var postreTotal = document.getElementById("order-line-2__total")
var noPostre = document.getElementById("no-postre-radio")
var dinersNumber = Number(diners.value);
var menuPrice = dinersNumber * (unitPrice);
var postrePrice = 0
var bebidaPrice = 0
var menuTotal = menuPrice + postrePrice + bebidaPrice
var orderTotal = document.getElementById("order-line-total__total");
var menuNumberLine1 = document.getElementById("order-line-1__number");
var menuTotalLine1 = document.getElementById("order-line-1__total");
var noBebida = document.getElementById("no-bebida-radio");
var siBebida = document.getElementById("si-bebida-radio");
var datepicker = document.getElementById("datepicker");


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
    orderTotal.innerHTML = menuTotal;
    menuNumberLine1.innerHTML = dinersNumber;
    menuTotalLine1.innerHTML = menuPrice;
  } else {
    price.innerHTML = "Total " + minPrice + " €";
  }
  minimoVisible();
  signColor();
}

var stepOne = function(event){
  f1.classList.remove("hidden");
  f2.classList.add("hidden");
  step2.classList.add("hidden");
  formRight.classList.add("hidden");
  postreButton.classList.add("hidden");
}

var stepTwo = function (event) {
  f1.classList.add("hidden");
  f2.classList.remove("hidden");
  f3.classList.add("hidden");
  step2.classList.remove("hidden");
  formRight.classList.remove("hidden");
  postreButton.classList.remove("hidden");
  bebidaButton.classList.add("hidden");
  // window.location = "#bebida";
}

var stepThree = function (event) {
  f2.classList.add("hidden");
  f3.classList.remove("hidden");
  f4.classList.add("hidden");
  postreButton.classList.add("hidden");
  bebidaButton.classList.remove("hidden");
  datosButton.classList.add("hidden");
  // window.location = "#bebida";
}

var stepFour = function (event) {
  f3.classList.add("hidden");

  f4.classList.remove("hidden");
  bebidaButton.classList.add("hidden");
  datosButton.classList.remove("hidden");
  // window.location = "#datos";
}


var locateUrl = function(){
  url = window.location.href;
  if (url.endsWith("#1")){
    stepTwo();
  } else if (url.endsWith("#bebida")) {
    stepThree();
  }else if (url.endsWith("#datos")) {
    stepFour();
  }else if (url.endsWith(".html")) {
    stepOne();
  }
}


var updateTotal = function(postrePrice, bebidaPrice){
  menuTotal = menuPrice + postrePrice + bebidaPrice
  orderTotal.innerHTML = menuTotal + " €"
}

var checkPostre = function(){
  postreRadios.forEach(function(postreRadio){
    if (postreRadio.checked && postreRadio.value != "no"){
      var checkedPostre = postreRadio.value;
      document.getElementById("order-line-2").classList.remove("transparent");
      document.getElementById("order-line-2__number").innerHTML = dinersNumber;
      document.getElementById("order-postre").innerHTML = checkedPostre;
      document.getElementById("order-line-2__total").innerHTML = dinersNumber + " €";
      postrePrice = dinersNumber;
    } else if (postreRadio.checked && postreRadio.value === "no"){
      document.getElementById("order-line-2").classList.add("transparent");
    }
    updateTotal(postrePrice, bebidaPrice);
  })
}



var checkBebida = function(){

  bebidaRadios.forEach(function(bebidaRadio){
    if (bebidaRadio.checked && bebidaRadio.value === "si"){
      document.getElementById("order-line-3").classList.remove("hidden");
      document.getElementById("order-line-3__number").innerHTML = dinersNumber;
      document.getElementById("order-bebida").innerHTML = "bebida";
      document.getElementById("order-line-3__total").innerHTML = dinersNumber * 3+ " €";
      bebidaPrice = 3 * dinersNumber;
    } else if (bebidaRadio.checked && bebidaRadio.value === "no"){
      document.getElementById("order-line-3").classList.add("hidden");
      bebidaPrice = 0;

    }
    updateTotal(postrePrice, bebidaPrice);
  })
}



diners.addEventListener("keyup", updateStepOnePrice);
window.addEventListener("click", updateStepOnePrice);
window.addEventListener("hashchange", locateUrl);

postreCards.forEach(function(postreCard) {
  postreCard.addEventListener("change", checkPostre)
});

bebidaRadios.forEach(function(postreCard) {
  postreCard.addEventListener("change", checkBebida)
});


noPostre.addEventListener("change", checkPostre)

window.addEventListener("DOMContentLoaded", updateStepOnePrice);

buttonNext.addEventListener("click", stepTwo);
// postreButton.addEventListener("click", stepThree);
// bebidaButton.addEventListener("click", stepFour);

increase.addEventListener("click", increaseDiners);
decrease.addEventListener("click", decreaseDiners);
// postre.addEventListener("onChange", function(event){
//   if postre
// }

flatpickr(datepicker, {
  minDate: Date.now()+ (24 * 60 * 60 * 1000)
});
