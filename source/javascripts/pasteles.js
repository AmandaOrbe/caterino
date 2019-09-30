
var unitPrice = Number(document.getElementById("precio").innerText);
var buttonNext = document.getElementById("button-next");
var diners = document.getElementById("comensales");
var price =document.getElementById("price");
var datosButton =document.getElementById("button-datos");
var f1 = document.getElementById("f1");
var step2 = document.getElementById("step2");
var f4 = document.getElementById("f4");
var formRight = document.getElementById("form-right");
var minPrice = unitPrice ;
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



var signColor = function(){
  if (Number(diners.value) > 1){
      minus.style.fill="#FDD000";
  } else {
     minus.style.fill="#BCBABA";
  }
}

var increaseDiners  = function (event){
  console.log('++');
  var dinersNumber = Number(diners.value);
  diners.value = Number(document.getElementById("comensales").value) + 1;
  minimo.style.opacity = 0;
}

var decreaseDiners  = function (event){
  console.log('--');
  if (Number(diners.value) > 1){
    var dinersNumber = Number(diners.value);
    diners.value = Number(document.getElementById("comensales").value) - 1;
  } else {
    minimo.style.opacity = 1;
  }

}

var updatePrices = function (event) {
    dinersNumber = Number(diners.value);
    menuPrice =  (Math.round((dinersNumber * unitPrice) * 100) / 100).toFixed(2);

};

var updateStepOnePrice = function(){
  updatePrices();
  if (menuPrice >= minPrice ) {
    price.innerHTML = "Total " +  menuPrice + " €";
    orderTotal.innerHTML = menuPrice;
    menuNumberLine1.innerHTML = dinersNumber;
    menuTotalLine1.innerHTML = menuPrice;
    menusField.value = dinersNumber + " * " + menuName + " = " + menuPrice;
  } else {
    price.innerHTML = "Total " + Math.round(minPrice * 100) / 100 + " €";
  }
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




console.log(Math.round(1/3 * 100) / 100)


diners.addEventListener("keyup", updateStepOnePrice);
window.addEventListener("click", updateStepOnePrice);
window.addEventListener("hashchange", locateUrl);

window.addEventListener("DOMContentLoaded", updateStepOnePrice);

buttonNext.addEventListener("click", stepTwo);


increase.addEventListener("click", increaseDiners);
decrease.addEventListener("click", decreaseDiners);


flatpickr(datepicker, {
  minDate: Date.now()+ (24 * 60 * 60 * 1000)
});
