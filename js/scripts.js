
function PizzaOrder() {
  this.pizzas[]
}
PizzaOrder.prototype.addPizzaOder = function(UserPizza) {
  this.UserPizzas.push(UserPizza);
}

function UserPizza (name, size, topping) {
  this.name = name,
  this.size = size,
  this.topping = topping,
  this.calculatePrice(totalPrice)
  this.Price = 15;
}
UserPizza.prototype.calculaterPrice = function(totalPrice) {
  if(this.size === "orignal") {
    this.price = 15;
  }else if (this.size  === "large") {
    this.price += 3; {
      else (this.size  === "small" ) {
        this.price -= 3;
      }
    }
  }
}


$(document).ready(function(){
  var topOption = [cheese, icecream, wholefish, more pizza!]
  populateTopping(topOption);
  $("#pizza").submit(function(event){
    even.preventDefault();
    var inputName = $("input#nameInput").val();
    var inputSize = $("input#pizzaSize").val();
    var inputTopping = $("input#topping").val();

    $("#result").show();
    $("#result").text(result);
  })
})
