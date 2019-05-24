
//= require jquery
//= require bootstrap



var buttonsTotal = document.querySelectorAll(".button--total");
var numberForms = document.querySelectorAll(".own__number-form");
var orderItemsRight = document.getElementById("order-items-right");
var orderLines = {}




var itemsObject= {}

numberForms.forEach(function(numberForm){
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
      html =  " <div class='details ' id= "+ itemsObject[item].name + "right> <p><span id='order-line-1__number'>" + itemsObject[item].value + "</span> * " + itemsObject[item].name + "</p><p id='order-line-1__total'>" + itemsObject[item].value * itemsObject[item].unitPrice + "</p></div>"
      if (document.getElementById(itemsObject[item].name + "right")){
        line = document.getElementById(itemsObject[item].name + "right");
        orderItemsRight.removeChild(line);
      }
      orderItemsRight.insertAdjacentHTML("beforeend", html)
    } else {
      card.style.borderLeft= "none"
      card.querySelector(".own__price").innerText = unitPrice;
      card.querySelector(".own__price").style.color= "black";
      card.querySelector(".own__name__cantidad").innerText = "";
      line = document.getElementById(itemsObject[item].name + "right");
      orderItemsRight.removeChild(line);
    }
}

var updateItemsObject = function(event, numberForm){
  item = numberForm.name;
  selectedObject = itemsObject[item];
  itemsObject[item].value = numberForm.value ;

  updatePage(event, item)




}



var updateButtonText = function(numberForm){
  item = numberForm.name;
  selectedObject = itemsObject[item];
  console.log(itemsObject);
  console.log(numberForm);
  console.log(itemsObject[item]);
  unitPrice = itemsObject[item].unitPrice;
  button = event.target.closest(".own__instance").querySelector(".button--total a");
  button.innerText = "Total " + numberForm.value * unitPrice + "€";

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
   // console.log(numberForm)
   console.log(itemsObject)
  });
});




