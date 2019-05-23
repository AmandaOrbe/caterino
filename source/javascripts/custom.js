
//= require jquery
//= require bootstrap




var numberForms = document.querySelectorAll(".own__number-form");


var updateButtonText = function(event, numberForm){
  button = event.target.closest(".own__instance").querySelector(".button--total a");
  card = event.target.closest(".own__instance").querySelector(".own__card");
  item = card.querySelector("h3");
  price = Number(card.querySelector(".own__price__number").innerText);
    console.log(button.innerText);
    button.innerText = "Total " + numberForm.value + "€";
    if (Number(numberForm.value) > 0) {
      console.log(price * Number(numberForm.value) )
      card.style.borderLeft= "7px solid #FDD000"
      card.querySelector(".own__price").innerText = price * Number(numberForm.value) + "€";
      card.querySelector(".own__price").style.color= "#FDD000";
      card.querySelector(".own__name__cantidad").innerText = numberForm.value + " *";
      // document.getElementById("order-items-right").innerHTML('beforeend','<h4>Entrantes</h4>');
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


