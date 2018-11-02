
function Pizza(name, size, topping) {
  this.name = name,
  this.size = size,
  this.topping = topping
  // this.toppingPrice = toppingPrice
  this.price = 10;
  this.sizePrice();
  // this.totalPrice();
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
// Pizza.prototype.toppingPrice = function() {
//   forEach
// }

// Pizza.prototype.totalPrice = function(){
//   this.sizePrice += this.toppingPrice
// }

// function populateTopping(topOptions) {
//   topOptions.forEach(function(topOption) {
//     $("#toppping").append(topOption);
//   });
// }

/// user interface logic
$(document).ready(function(){
  var topOption = ["cheese", "icecream", "wholefish", "more pizza"];
  // populateTopping(topOption);
  $("#pizzaHut").submit(function(event){
    event.preventDefault();
    var inputName = $("input#nameInput").val();
    var inputSize = $("#sizeInput").val();
    var inputTopping = $("#topInput").val();


    var newPizza = new Pizza(inputName, inputSize, inputTopping)
    console.log(inputSize)
    $("#result").text(newPizza);
    console.log(newPizza)
  });
});
