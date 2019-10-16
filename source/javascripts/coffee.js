var unitPrice = Number(document.getElementById("unit-price").innerText);
var comensales = document.getElementById("comensales");
var comensalesValue = Number(comensales.value);
var menuPrice = 15 * unitPrice;
var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var minimo = document.getElementById("minimo");
var minus = document.getElementById("minus");
var priceStep1 = document.getElementById("total-price-step1");
var menuNumberLine1 = document.getElementById("order-line-1__number");
var menuTotalLine1 = document.getElementById("order-line-1__total");
var orderTotal = document.getElementById("order-line-total__total");
var menuName = document.getElementById("menu-name").innerText;
var menusField = document.getElementById("menus-field");
var buttonNext = document.getElementById("button-next");
var datosButton =document.getElementById("button-datos");
var formRight = document.getElementById("form-right");





// functions***********************

var isMinimoVisible = function(){
  if (Number(comensales.value) < 15) {
    minimo.style.opacity = 1;
  } else if  (Number(comensales.value) > 14){
    minimo.style.opacity = 0;
  }
}

var signColor = function(){
  if (Number(comensales.value) > 15){
      minus.style.fill="#FDD000";
  } else {
     minus.style.fill="#BCBABA";
  }
}

var increaseComensales  = function (event){
  comensales.value = Number(document.getElementById("comensales").value) + 1;
  isMinimoVisible();
  signColor();
  updateMenuPrice();
}

var decreaseComensales  = function (event){
  if (Number(comensales.value) > 15){
    comensales.value = Number(document.getElementById("comensales").value) - 1;
  } else {
    minimo.style.opacity = 1;
  }
  signColor();
  updateMenuPrice();
}


// var updateComensalesValue = function (){
//   comensalessValue = Number(comensales.value);
//   console.log('dinners value is ' + comensales.value );
// };

var printMenuPrice = function(){
  priceStep1.innerHTML = "Total " + (Math.round(menuPrice * 100) / 100).toFixed(2)+ " €";
  orderTotal.innerHTML = "Total " + (Math.round(menuPrice * 100) / 100).toFixed(2)+ " €";
  menuNumberLine1.innerHTML = Number(comensales.value);
  menuTotalLine1.innerHTML = "Total " + (Math.round(menuPrice * 100) / 100).toFixed(2)+ " €";
  menusField.value = Number(comensales.value) + " * " + menuName + " = " + menuPrice;
}

var updateMenuPrice = function (){
  menuPrice = Number(comensales.value) * unitPrice;
  printMenuPrice()
};

var stepTwo = function (event) {
  f1.classList.add("hidden");
  f4.classList.remove("hidden");
  step2.classList.remove("hidden");
  formRight.classList.remove("hidden");
  datosButton.classList.remove("hidden");

  // window.location = "#bebida";
}


// event listeners***********************

increase.addEventListener("click",  increaseComensales, updateMenuPrice);
decrease.addEventListener("click", decreaseComensales, updateMenuPrice);
comensales.addEventListener("keyup", isMinimoVisible,  updateMenuPrice);
buttonNext.addEventListener("click", stepTwo);

flatpickr(datepicker, {
  minDate: Date.now()+ (24 * 60 * 60 * 1000)
});
