function Pizza(size, meats, cheese, crust, sauce, veggies) {
  this.size = size
  this.meats = meats
  this.cheese = cheese
  this.crust = crust
  this.sauce = sauce
  this.veggies = veggies
}

function makePizza() {
  var fieldNames = ['size', 'crust', 'cheese', 'sauce', 'meats', 'veggies']
  for (var i = 0; i < fieldNames.length; i++) {
    var fields = document.getElementsByName(fieldNames[i])
    var Pizzas = []
    for (var j = 0; j < fields.length; j++) {
      if (fields[j].checked) {
        console.log(fields[j].value)
        Pizzas.push(fields[j].value)
      }
    }
  }
}
