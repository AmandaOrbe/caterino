
var unitPrice = Number(document.getElementById("unit-price").innerText);
var buttonNext = document.getElementById("button-next");
var diners = document.getElementById("comensales");
var price =document.getElementById("price");
var datosButton =document.getElementById("button-datos");
var f1 = document.getElementById("f1");
var step2 = document.getElementById("step2");
var f4 = document.getElementById("f4");
var formRight = document.getElementById("form-right");
var minPrice = unitPrice * 15;
var minimo = document.getElementById("minimo")
var minus = document.getElementById("minus")
var increase = document.getElementById("increase")
var decrease = document.getElementById("decrease")
var dinersNumber = Number(diners.value);
var menuPrice = dinersNumber * (unitPrice);
var menuTotal = menuPrice
var orderTotal = document.getElementById("order-line-total__total");
var menuName = document.getElementById("menu-name").innerText;
var menuNumberLine1 = document.getElementById("order-line-1__number");
var menuTotalLine1 = document.getElementById("order-line-1__total");
var datepicker = document.getElementById("datepicker");
var menusField = document.getElementById("menus-field");


var isMinimoVisible = function(){
  console.log('isMinimoVisible');
  if (Number(diners.value) < 15) {
    minimo.style.opacity = 1;
  } else if  (Number(diners.value) > 14){
    minimo.style.opacity = 0;
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
  isMinimoVisible();
}

var decreaseDiners  = function (event){
  console.log('decreaseDiners');
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
    price.innerHTML = "Total " + (Math.round(menuPrice * 100) / 100).toFixed(2)+ " €";
    orderTotal.innerHTML = menuTotal;
    menuNumberLine1.innerHTML = dinersNumber;
    menuTotalLine1.innerHTML = menuPrice;
    menusField.value = dinersNumber + " * " + menuName + " = " + menuPrice;
  } else {
    price.innerHTML = "Total " + minPrice + " €";
  }
  // isMinimoVisible();
  signColor();
}

var stepOne = function(event){
  f1.classList.remove("hidden");
  f4.classList.add("hidden");
  step2.classList.add("hidden");
  formRight.classList.add("hidden");
  datosButton.classList.add("hidden");
  console.log("stepOne");
}

var stepTwo = function (event) {
  f1.classList.add("hidden");
  f4.classList.remove("hidden");
  step2.classList.remove("hidden");
  formRight.classList.remove("hidden");
  datosButton.classList.remove("hidden");
  console.log("stepTwo");

  // window.location = "#bebida";
}




var locateUrl = function(){
  url = window.location.href;
  if (url.endsWith("1")){
    stepTwo();
  }else if (url.endsWith(".html")) {
    console.log("url.endsWith(.html)");
    stepOne();
  }
}


var updateTotal = function(postrePrice, bebidaPrice){
  menuTotal = menuPrice + postrePrice + bebidaPrice;
  orderTotal.innerHTML = menuTotal + " €";

}




diners.addEventListener("keyup", updateStepOnePrice);
diners.addEventListener("keyup", isMinimoVisible);
window.addEventListener("click", updateStepOnePrice);
window.addEventListener("hashchange", locateUrl);



window.addEventListener("DOMContentLoaded", updateStepOnePrice);

buttonNext.addEventListener("click", stepTwo);


increase.addEventListener("click", increaseDiners);
decrease.addEventListener("click", decreaseDiners);


flatpickr(datepicker, {
  minDate: Date.now()+ (24 * 60 * 60 * 1000)
});
