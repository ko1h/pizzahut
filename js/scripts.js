function Pizza(name, size, topping) {
  this.name = name,
  this.size = size,
  this.topping = topping
  this.totalPizzaChoice = []
  this.total = 0
}
Pizza.prototype.pizzaChoice = function() {
  this.size = this.size * 3;
  this.topping = this.topping * 2;
  this.totalPizzaChoice.push(this.size, this.topping);
  console.log("this is working 2")
  return this.totalPizzaChoice;
}

Pizza.prototype.totalPizza = function() {
  for (var i = 0; i < this.totalPizzaChoice.length; i++) {
    this.total += this.totalPizzaChoice[i];
  }
  return this.name + " " + this.total + " Dollars is your total";
}
$(document).ready(function(){
  $("#pizzaHut").submit(function(event){
    event.preventDefault();
    var name = $("#nameInput").val();
    var size = $("#sizeInput").val();
    var topping = $("#topInput").val();
    console.log(name)



    var newPizza = new Pizza(name, size, topping);

    newPizza.pizzaChoice();

    if (size === "1") {
      $("#result").text(newPizza.totalPizza());
    } else if (size === "2") {
      $("#result").text(newPizza.totalPizza());
    } else if (size === "3") {
      $("#result").text(newPizza.totalPizza());
      }
    console.log(newPizza)
  });
});
