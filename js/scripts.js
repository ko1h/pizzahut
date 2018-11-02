///Business logic
function PizzaOrder() {
  this.pizzas = []
}

PizzaOrder.prototype.addPizzaOder = function(UserPizza) {
  this.pizzas.push(UserPizza);
}

function UserPizza (name, size, topping) {
  this.name = name,
  this.size = size,
  this.topping = topping
  this.sizePrice =sizePrice
  this.toppingPrice = toppingPrice
  this.Price = 10;
  this.totalPrice = 0;
}

UserPizza.prototype.sizePrice = function() {
  if(this.size === "orignal") {
    this.price = 10;
    }
    else if (this.size === "Large") {
      this.price += 3;
    }
    else if (this.size === "small") {
      this.price -= 3;
    }
}

UserPizza.prototype.toppingPrice = function() {
  forEach
}

Userpizza.prototype.total = function(){
  this.sizePrice += this.toppingPrice
}
// function populateTopping(topOptions) {
//   topOptions.forEach(function(topOption) {
//     $("#toppping").append(topOption);
//   });
// }

/// user interface logic
$(document).ready(function(){
  // var topOption = ["cheese", "icecream", "wholefish", "more pizza"];
  // populateTopping(topOption);
  $("#pizza").submit(function(event){
    even.preventDefault();
    var inputName = $("input#nameInput").val();
    var inputSize = $("input#pizzaSize").val();
    var inputTopping = $("input#topping").val();
    return;

    var
    $("#result").show();
    $("#result").text(result);
  });
});
