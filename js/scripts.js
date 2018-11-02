function Pizza (name, size, topping) {
  this.name = name,
  this.size = size,
  this.topping = topping
}



$(document).ready(function(){
  $("#pizza").submit(function(event){
    even.preventDefault();
    var inputName = $("#nameInput").val();
    var inputSize = $("#pizzaSize").val();
    var inputTopping = $("#topping").val();

    $("#result").show();
    $("#result").text(result);
  })
})
