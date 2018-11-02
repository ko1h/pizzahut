///Business logic
function PizzaOrder() {
  this.pizzas = []
}

PizzaOrder.prototype.addPizzaOder = function(userPizza) {
  this.UserPizzas.push(userPizza;
}

function UserPizza (name, size, topping) {
  this.name = name,
  this.size = size,
  this.topping = topping
  // this.calculatePrice(totalPrice)
  // this.Price = 15;
}

UserPizza.prototype.calculaterPrice = function(totalPrice) {
  if(this.size === "orignal") {
    this.price = 15;
    }
    else if (this.size === "Large") {
      this.price += 3;
    }
    else if (this.size === "small") {
      this.price -= 3;
    }
}

function populateTopping(topOptions) {
  topOptions.forEach(function(topOption) {
    $("#toppping").append(topOption);
  });
}

/// user interface logic
$(document).ready(function(){
  var topOption = ["cheese", "icecream", "wholefish", "more pizza"];
  populateTopping(topOption);
  $("#pizza").submit(function(event){
    even.preventDefault();
    var inputName = $("input#nameInput").val();
    var inputSize = $("input#pizzaSize").val();
    var inputTopping = $("input#topping").val();

    $("#result").show();
    $("#result").text(result);
  });
});
