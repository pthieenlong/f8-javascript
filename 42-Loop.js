/*
    Vòng lặp - loop

    1. for
    2. for/in - lặp qua key của đối tượng
    3. for/of - lặp qua value của đối tượng
    4. while
    5. do/while - lặp ít nhất 1 lần, sau đó lặp khi 
        điều kiện đúng

*/


//for/in
//thường sử dụng khi lấy key của đối tượng
var myInfor = {
    name: 'Long',
    age: 18,
    address: 'HCM, VN',
}

for(var key in myInfor) {
    console.log(myInfor[key]);
}

//for/of
//thường sử dụng khi lấy value của đối tượng
//ko áp dụng được với object

var keys = Object.keys(myInfor);

for(var value of keys) {
    console.log(myInfor[value]);
}

