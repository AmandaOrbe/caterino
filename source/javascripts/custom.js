
//= require jquery
//= require bootstrap



var buttonsBack = document.querySelectorAll(".button--back");
var numberForms = document.querySelectorAll(".own__number-form");
var orderItemsRight = document.getElementById("order-items-right");
var orderLines = []


var updateButtonText = function(event, numberForm){
  button = event.target.closest(".own__instance").querySelector(".button--total a");
  card = event.target.closest(".own__instance").querySelector(".own__card");
  item = card.querySelector("h3");
  unitPrice = Number(card.querySelector(".own__price__number").innerText);
    console.log(button.innerText);
    button.innerText = "Total " + numberForm.value + "€";
    if (Number(numberForm.value) > 0) {
      console.log(unitPrice * Number(numberForm.value) )
      card.style.borderLeft= "7px solid #FDD000"
      card.querySelector(".own__price").innerText = unitPrice * Number(numberForm.value) + "€";
      card.querySelector(".own__price").style.color= "#FDD000";
      card.querySelector(".own__name__cantidad").innerText = numberForm.value + " *";
      // document.getElementById("order-items-right").innerHTML('beforeend','<h4>Entrantes</h4>');
    } else {
      card.style.borderLeft= "none"
      card.querySelector(".own__price").innerText = unitPrice;
      card.querySelector(".own__price").style.color= "black";
      card.querySelector(".own__name__cantidad").innerText = "";
    }
}

numberForms.forEach(function(numberForm){
  numberForm.addEventListener("change", function(event){
    updateButtonText(event, numberForm);
  });
  numberForm.addEventListener("keyup", function(event){
    updateButtonText(event, numberForm);
  });
});


buttonsBack.forEach(function(buttonBack){
  buttonBack.addEventListener("click", function(event){
   console.log("button--back")
  });
});


