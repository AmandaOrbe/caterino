
//= require jquery
//= require bootstrap



var buttonsTotal = document.querySelectorAll(".button--total");
var numberForms = document.querySelectorAll(".own__number-form");
var orderItemsRight = document.getElementById("order-items-right");
var orderLines = []




var itemsObject= {}

numberForms.forEach(function(numberForm){
  // console.log(numberForm);
  card = numberForm.closest(".own__instance").querySelector(".own__card")
  itemsObject[numberForm.name.toString()] = {
    name: numberForm.name,
    unitPrice: Number(card.querySelector(".own__price__number").innerText),
    value: numberForm.value};
});


console.log(itemsObject.croquetas);

var updatePage = function(event, item){
  card = event.target.closest(".own__instance").querySelector(".own__card");
  value = Number(itemsObject[item].value);
  unitPrice = Number(itemsObject[item].unitPrice);


   if ( value > 0) {
      card.style.borderLeft= "7px solid #FDD000"
      card.querySelector(".own__price").innerText = unitPrice * value + "€";
      card.querySelector(".own__price").style.color= "#FDD000";
      card.querySelector(".own__name__cantidad").innerText = value + " *";
      // document.getElementById("order-items-right").innerHTML('beforeend','<h4>Entrantes</h4>');
    } else {
      card.style.borderLeft= "none"
      card.querySelector(".own__price").innerText = unitPrice;
      card.querySelector(".own__price").style.color= "black";
      card.querySelector(".own__name__cantidad").innerText = "";
    }
}

var updateItemsObject = function(event, numberForm){
  //Updates the items object with the new value
  // itemName = numberForm.name,
  // console.log(event.target.closest(".own__instance").querySelector(".own__card"));
  item = numberForm.name;
  selectedObject = itemsObject[item];
  itemsObject[item].value = numberForm.value ;

  updatePage(event, item)

  console.log(itemsObject[item]);
  console.log(itemsObject[item].value);
  console.log(numberForm.value);


}



var updateButtonText = function(numberForm){
  item = numberForm.name;
  selectedObject = itemsObject[item];
  console.log(itemsObject);
  console.log(numberForm);
  console.log(itemsObject[item]);
  unitPrice = itemsObject[item].unitPrice;
  button = event.target.closest(".own__instance").querySelector(".button--total a");
  // card = event.target.closest(".own__instance").querySelector(".own__card");
  button.innerText = "Total " + numberForm.value * unitPrice + "€";
    // if (Number(numberForm.value) > 0) {
    //   card.style.borderLeft= "7px solid #FDD000"
    //   card.querySelector(".own__price").innerText = unitPrice * Number(numberForm.value) + "€";
    //   card.querySelector(".own__price").style.color= "#FDD000";
    //   card.querySelector(".own__name__cantidad").innerText = numberForm.value + " *";
    //   // document.getElementById("order-items-right").innerHTML('beforeend','<h4>Entrantes</h4>');
    // } else {
    //   card.style.borderLeft= "none"
    //   card.querySelector(".own__price").innerText = unitPrice;
    //   card.querySelector(".own__price").style.color= "black";
    //   card.querySelector(".own__name__cantidad").innerText = "";
    // }
}

numberForms.forEach(function(numberForm){
  numberForm.addEventListener("change", function(event){
    updateItemsObject(event, numberForm);
    updateButtonText(numberForm);
  });

  numberForm.addEventListener("keyup", function(event){
    // updateButtonText(event, numberForm);
    // updateItemsObject(event, numberForm);
  });
});


buttonsTotal.forEach(function(buttonTotal){
  buttonTotal.addEventListener("click", function(event){
    var numberForm = event.target.closest(".modal-content").querySelector(".own__number-form");
    updateItemsObject(event, numberForm);
   // console.log(numberForm)
  });
});


