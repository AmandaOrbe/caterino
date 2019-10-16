var unitPrice = Number(document.getElementById("unit-price").innerText);
var comensales = document.getElementById("comensales");
var comensalesValue = Number(comensales.value);
var menuPrice = 15 * unitPrice;
var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var minimo = document.getElementById("minimo");
var minus = document.getElementById("minus");
var priceStep1 = document.getElementById("total-price-step1");
var menuNumber = document.getElementById("order-line-1__number");
var menuTotal = document.getElementById("order-line-1__total");
var orderTotal = document.getElementById("order-line-total__total");
var menuName = document.getElementById("menu-name").innerText;
var menusField = document.getElementById("menus-field");
var buttonNext = document.getElementById("button-next");
var datosButton =document.getElementById("button-datos");
var postreButton =document.getElementById("button-postre");
var bebidaButton =document.getElementById("button-bebida");
var formRight = document.getElementById("form-right");

var f1 = document.getElementById("f1");
var step2 = document.getElementById("step2");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");


var postreCards = document.querySelectorAll(".form__radio-group");
var postreTotal = document.getElementById("order-line-2__total");
var noPostre = document.getElementById("no-postre-radio");
var postreRadios = document.getElementsByName('postre');
var postrePrice = 0;
var postresField = document.getElementById("postres-field");
var totalField = document.getElementById("total-field");


var bebidaWarning = document.getElementById("bebida-warning");
var bebidaRadios = document.getElementsByName('bebida');




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
  console.log('decreaseDiners');
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
  menuNumber.innerHTML = Number(comensales.value);
  menuTotal.innerHTML = "Total " + (Math.round(menuPrice * 100) / 100).toFixed(2)+ " €";
  menusField.value = Number(comensales.value) + " * " + menuName + " = " + menuPrice;
  console.log(menusField.value);
}

var updateMenuPrice = function (){
  menuPrice = Number(comensales.value) * unitPrice;
  printMenuPrice()
};

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



var updateOrderTotal = function(postrePrice){
  menuTotal = menuPrice + postrePrice
  orderTotal.innerHTML = "Total " + (Math.round(menuTotal * 100) / 100).toFixed(2)+ " €";
  totalField.value = + menuTotal + "€";
}


var checkPostre = function(){
  postreRadios.forEach(function(postreRadio){
    if (postreRadio.checked && postreRadio.value != "no"){
      var checkedPostre = postreRadio.value;
      document.getElementById("order-line-2").classList.remove("transparent");
      document.getElementById("order-line-2__number").innerHTML = Number(comensales.value);
      document.getElementById("order-postre").innerHTML = checkedPostre;
      document.getElementById("order-line-2__total").innerHTML = Number(comensales.value) * 1.5 + " €";
      postrePrice = Number(comensales.value) *1.5;
      var postreSelected = document.getElementById("order-postre").innerHTML
      postresField.value = Number(comensales.value) + " * " + postreSelected + " = " + Number(comensales.value) * 1.5 + "€";
    } else if (postreRadio.checked && postreRadio.value === "no"){
      document.getElementById("order-line-2").classList.add("transparent");
      postrePrice = 0;
    }
    updateOrderTotal(postrePrice);
  })
}


var checkBebida = function(){

  bebidaRadios.forEach(function(bebidaRadio){
    if (bebidaRadio.checked && bebidaRadio.value === "si"){
      bebidaWarning.classList.remove("hidden");
      console.log("checkbebida");
    } else if (bebidaRadio.checked && bebidaRadio.value === "no"){
      bebidaWarning.classList.add("hidden");
    }
  })
}



// event listeners***********************

// Step1
increase.addEventListener("click",  increaseComensales, updateMenuPrice);
decrease.addEventListener("click", decreaseComensales, updateMenuPrice);
comensales.addEventListener("keyup", isMinimoVisible,   updateMenuPrice);
buttonNext.addEventListener("click", stepTwo);
postreButton.addEventListener("click", stepThree);
bebidaButton.addEventListener("click", stepFour);

// Postre
postreCards.forEach(function(postreCard) {
  postreCard.addEventListener("change", checkPostre)
});
noPostre.addEventListener("change", checkPostre);


//Bebida
bebidaRadios.forEach(function(postreCard) {
  postreCard.addEventListener("change", checkBebida)
});


flatpickr(datepicker, {
  minDate: Date.now()+ (24 * 60 * 60 * 1000)
});
