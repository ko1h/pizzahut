function Pizza(name, size, topping) {
  this.name = name,
  this.size = size,
  this.topping = topping
  // this.price = 10;
  // this.sizePrice();
  // this.toppingPrice();
}

Pizza.prototype.sizePrice = function(size) {
  if(this.size === "orignal") {
    this.price == 10;
    }
    else if (this.size === "Large") {
      this.price += 3;
    }
    else if (this.size === "small") {
      this.price -= 3;
    }
}
Pizza.prototype.toppingPrice = function(topping) {
  if(this.topping === "icecream") {
    this.itemPrice =+ 3;
  }
  else if(this.topping === "aligator") {
    this.itemPrice =+ 7;
  }
  else if(this.topping === "whole fish") {
    this.itemPrice -= 5;
  }
  else if(this.topping === "more pizza") {
    this.itemPrice =+ 10;
  }
}
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
    $("#result").text(newPizza);
    console.log(newPizza)
  });
});
