function makePizza() {
  var fieldNames = ['size', 'crust', 'cheese', 'sauce', 'meats', 'veggies']
  var myPizza = Object.create(null)
  for (var i = 0; i < fieldNames.length; i++) {
    var fields = document.getElementsByName(fieldNames[i])
    var pizzaToppings = []
    for (var j = 0; j < fields.length; j++) {
      if (fields[j].checked) {
        pizzaToppings.push(new Object('{' + fieldNames[i] + ': ' + fields[j].value + ', price: ' + fields[j].dataset.price + '};'))
      }
    }
    myPizza[fieldNames[i]] = pizzaToppings
  }
  return myPizza
}



function tableCreate() {
  var varPizza = makePizza()
  var fieldNames = ['size', 'crust', 'cheese', 'sauce', 'meats', 'veggies']
  var table = $('#receipt')
  for (var field of fieldNames) {
    console.log(varPizza[field])
    for (var topping of varPizza[field]) {
      var row = $('<tr/>').addClass('pizza').html('<td>' + topping[field] + '</td>' + '<td>' + topping[price] + '</td>')
      table.append(row)
    }
  }
}
