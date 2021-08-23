// DOM Events

// 1.Attribute events
// 2.Assign event using the element node


var price = document.getElementById('price');
var quantity = document.getElementById('quantity');
var itemPrice = 5;

quantity.onchange = function(e) {
    price.innerText = itemPrice * e.target.value;
    // console.log(itemPrice);
}



