/*

    reduce(function, gia tri khoi tao)

    tuy vao object, tuy vao bai toan thi
    co gia tri khoi tao khac nhau

    function(accumulator, currentValue, currentIndex, originArray) {


        return ve cai gi thi accumulator lan lap tiep theo = cai day
    }
*/
function Course(id, name, coin) {
    this.id = id;
    this.name = name;
    this.coin = coin;
}

var courses = [
    js = new Course(1, 'javascript', 0),
    java = new Course(2, 'java core', 0),
    react = new Course(3, 'React JS', 500),
];

function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    return accumulator + currentValue.coin;
}
var totalCoin = courses.reduce(coinHandler, 0); 

var totalCoins = courses.reduce((a, b) => a + b.coin, 0);
console.log(totalCoins);