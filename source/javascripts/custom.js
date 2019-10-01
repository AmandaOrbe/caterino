
//= require jquery
//= require bootstrap



var buttonsTotal = document.querySelectorAll(".button--total");
var numberForms = document.querySelectorAll(".own__number-form");
var orderItemsRight = document.getElementById("order-items-right");
var empty = document.querySelector(".form-right__empty");
var ownMenu = document.querySelector(".own-menu");
var datos = document.querySelector(".datos");
var totalLine = document.getElementById("order-line-total2");
var totalNumber = document.getElementById("order-line-total__total");
var siguiente = document.getElementById("button-next-own");
var confirmar = document.getElementById("button-submit-own");
var verMas = document.querySelector(".ver-mas");
var close = document.querySelector(".close-cross");
var entrantesTab = document.getElementById("entrantes-tab");
var principalesTab = document.getElementById("principales-tab");
var postresTab = document.getElementById("postres-tab");
var bebidasTab = document.getElementById("bebidas-tab");
var tabs = document.querySelector(".tabs");
var totalField = document.getElementById("total-field");

var itemsObject= {}
var totalsObject = {}

var datepicker = document.getElementById("datepicker");

var reducer = function(accumulator, currentValue) {
  accumulator + currentValue;
}


numberForms.forEach(function(numberForm){
  card = numberForm.closest(".own__instance").querySelector(".own__card")
  itemsObject[numberForm.name.toString()] = {
    slug: numberForm.name.replace(/\s/g, ''),
    name: numberForm.name,
    unitPrice: Number(card.querySelector(".own__price__number").innerText),
    value: numberForm.value,
    itemTotal: (Number(card.querySelector(".own__price__number").innerText) * numberForm.value )
  };
});






var updateTotalsObject =  function(item){
  totalsObject[item] = itemsObject[item].itemTotal;
}

var displayTotalPrice = function() {
  console.log( 'displayTotalPrice')
  totalsArray = []
  total = 0
  Object.values(totalsObject).forEach(function(value){
    total = total + value;
  })
  totalNumber.innerText = total + " €"



}


function totalHide(isHidden) {
  return (isEmpty ? totalLine.classList.add("hidden") : console.log("totalHiddden"));
  return (isEmpty ? verMas.classList.add("hidden") : console.log("totalHiddden"));
}

function totalShow(isHidden) {
  return (isEmpty ? totalLine.classList.remove("hidden") : console.log("totalShowNOTContains") );
  return (isEmpty ? verMas.classList.remove("hidden") : console.log("totalShowNOTContains") );
}

function siguienteHide(isHidden) {
  return (isEmpty ? siguiente.classList.add("hidden") : console.log("confirmaHiddden"));
}

function siguienteShow(isHidden) {
  return (isEmpty ? siguiente.classList.remove("hidden") : console.log("siguienteShowNOTContains") );
}

// var observer = new IntersectionObserver(function(entries) {
//   // isIntersecting is true when element and viewport are overlapping
//   // isIntersecting is false when element and viewport don't overlap
//   var element = entries[0].target.id.replace("-row", "")
//   var path = "#" + element;
//   var tab = document.getElementById(element+"-tab")
//   if(entries[0].isIntersecting === true){
//     // history.pushState({}, "", path)
//     tab.classList.add("tab--current");

//   }else{
//     tab.classList.remove("tab--current");

//   }
// }, { threshold: [.51] });

// observer.observe(document.querySelector("#entrantes-row"));
// observer.observe(document.querySelector("#principales-row"));
// observer.observe(document.querySelector("#postres-row"));
// observer.observe(document.querySelector("#bebidas-row"));

var isEmpty = function(){
  if (document.querySelector(".details")){
    empty.style.display = "none";
    totalShow(totalLine.classList.contains("hidden"));
    siguienteShow(siguiente.classList.contains("hidden"));

  } else{
    empty.style.display = "block";
    totalHide(totalLine.classList.contains("hidden"));
    siguienteHide(siguiente.classList.contains("hidden"));
  }
}

var updatePage = function(event, item){
  card = event.target.closest(".own__instance").querySelector(".own__card");
  value = Number(itemsObject[item].value);
  unitPrice = Number(itemsObject[item].unitPrice);
   if ( value > 0) {
      card.style.borderLeft= "7px solid #FDD000"
      card.querySelector(".own__price").innerText = unitPrice * value + "€";
      card.querySelector(".own__price").style.color= "#FDD000";
      card.querySelector(".own__name__cantidad").innerText = value + " *";
      html =  " <div class='details ' id= "+ itemsObject[item].slug + "right> <p><span id='order-line-1__number'>" + itemsObject[item].value + "</span> * " + itemsObject[item].name + "</p><p id='order-line-1__total'>" + itemsObject[item].value * itemsObject[item].unitPrice + " €</p></div>"
      if (document.getElementById(itemsObject[item].slug + "right")){
        line = document.getElementById(itemsObject[item].slug + "right");
        orderItemsRight.removeChild(line);
      }
      orderItemsRight.insertAdjacentHTML("beforeend", html)
    } else {
      card.style.borderLeft= "none"
      card.querySelector(".own__price").innerText = unitPrice;
      card.querySelector(".own__price").style.color= "black";
      card.querySelector(".own__name__cantidad").innerText = "";
      line = document.getElementById(itemsObject[item].slug + "right");
      orderItemsRight.removeChild(line);
    }
    isEmpty();
    displayTotalPrice();

}

var updateItemsObject = function(event, numberForm){
  item = numberForm.name;
  selectedObject = itemsObject[item];
  itemsObject[item].value = numberForm.value ;
  itemsObject[item].itemTotal = itemsObject[item].unitPrice * itemsObject[item].value;
  updateTotalsObject(item);
  updatePage(event, item)
}



var updateButtonText = function(numberForm){
  item = numberForm.name;
  selectedObject = itemsObject[item];
  unitPrice = itemsObject[item].unitPrice;
  button = event.target.closest(".own__instance").querySelector(".button--total a");
  button.innerText = "Total " + numberForm.value * unitPrice + "€";
}

var showDetails = function(){
  orderItemsRight.style.display = "block";
  verMas.style.display = "none";
  console.log(close);
  close.classList.remove("hidden");
}


var hideDetails = function(){
  orderItemsRight.style.display = "none";
  verMas.style.display = "block";
  close.classList.add("hidden");
}

var stepOne = function () {
  ownMenu.classList.remove("hidden");
  datos.classList.add("hidden");
  confirmar.classList.add("hidden");
  tabs.classList.remove("hidden");
  isEmpty();
}
var stepTwo = function (event) {
  console.log("stepTwo")
  tabs.classList.add("hidden");
  ownMenu.classList.add("hidden");
  datos.classList.remove("hidden");
  siguiente.classList.add("hidden");
  confirmar.classList.remove("hidden");
}

numberForms.forEach(function(numberForm){
  numberForm.addEventListener("change", function(event){
    updateButtonText(numberForm);
  });
  numberForm.addEventListener("keyup", function(event){
    updateButtonText( numberForm);
  });
});


buttonsTotal.forEach(function(buttonTotal){
  buttonTotal.addEventListener("click", function(event){
    var numberForm = event.target.closest(".modal-content").querySelector(".own__number-form");
    updateItemsObject(event, numberForm);

  });
});

siguiente.addEventListener("click", stepTwo);

verMas.addEventListener("click", showDetails);
close.addEventListener("click", hideDetails);

window.onhashchange = function() {
     if(window.location.href.endsWith("#datos")){
      stepTwo();
     }else{
      stepOne();
     };
}

flatpickr(datepicker, {
  minDate: Date.now()+ (24 * 60 * 60 * 1000)
});


