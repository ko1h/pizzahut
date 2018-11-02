function Pizza(name, size, topping) {
  this.name = name,
  this.size = size,
  this.topping = topping
}

Pizza.prototype.totalPrice = function() {
  var pizzaPrice = 10;
  if((this.size === "orignal") && (this.topping === "icecream")) {
    pizzaPrice += 3;
    }
    else if ((this.size === "orignal") && (this.topping === "aligator")) {
      pizzaPrice += 5;
    }
    else if ((this.size === "orignal") && (this.topping === "whole fish")){
      pizzaPrice -= 5;
    }
    else if(this.topping === "icecream") {
    pizzaPrice += 3;
    }
    else if(this.topping === "aligator") {
    pizzaPrice += 5;
    }
    else if(this.topping === "whole fish") {
    pizzaPrice -= 2;
    }
    else if(this.topping === "more pizza") {
    pizzaPrice += 10;
    }
    return pizzaPrice;
};
/// user interface logic
$(document).ready(function(){
  $("#pizzaHut").submit(function(event){
    event.preventDefault();
    var inputName = $("input#nameInput").val();
    var inputSize = $("#sizeInput").val();
    var inputTopping = $("#topInput").val();
    console.log(inputName)
    console.log(inputSize)
    console.log(inputTopping)


    var newPizza = new Pizza(inputName, inputSize, inputTopping);
    $("#result").text(newPizza.totalPrice());
    console.log(newPizza)
  });
});
