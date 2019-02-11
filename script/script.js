function getHTMLElements() {
  var fieldNames = ['size', 'crust', 'cheese', 'sauce', 'meats', 'veggies']
  var myPizza = Object.create(null)
  for (var i = 0; i < fieldNames.length; i++) {
    var fields = document.getElementsByName(fieldNames[i])
    var pizzaToppingHTMLElement = []
    for (var j = 0; j < fields.length; j++) {
      if (fields[j].checked) {
        pizzaToppingHTMLElement.push(fields[j])
      }
    }
    myPizza[fieldNames[i]] = pizzaToppingHTMLElement
  }
  return myPizza
}

function tableCreate() {
  var varPizza = getHTMLElements()
  var fieldNames = ['size', 'crust', 'cheese', 'sauce', 'meats', 'veggies']
  var table = $('#receipt')
  var total = 0
  for (var field of fieldNames) {
    for (var i = 0; i < varPizza[field].length; i++) {
      var row
      var price
      if (((field === 'meats' || field === 'veggies') && (i == 0))) {
        price = parseFloat(Math.round(0) / 100).toFixed(2)
        total += parseFloat(price)
        row = $('<tr/>').addClass('toppings').html('<td>' + varPizza[field][i].value + '</td>' + '<td>$' + price + '</td>')
        table.append(row)
      } else {
        price = parseFloat(Math.round(varPizza[field][i].dataset.price) / 100).toFixed(2)
        total += parseFloat(price)
        row = $('<tr/>').addClass('toppings').html('<td>' + varPizza[field][i].value + '</td>' + '<td>$' + price + '</td>')
        table.append(row)
      }
    }
  }
  $('#total').append(total.toFixed(2))
}
