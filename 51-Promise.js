// Promise 

//Sync / Async
//Đồng bộ / Bất đồng bộ

//Pain

//-> Lý thuyết, cách hoạt động của promise
//example



//Sync // Async

//Đồng bộ là thằng nào viết trước chạy trước,
// viết sau chạy sau

// Async: setTimeout, setInterval
// call api: fetch, XMLHttpRequest
// file reading
// request animation frame

//Mỗi hàm async thường sẽ truyền vào 1 callback
//=> Callback hell
//=> Pyramid of doom
//ex:
// setTimeout(function() {
//     console.log(1); // viec 1
//     setTimeout(function() {
//         console.log(2); // viec 2
//         setTimeout(function() {
//             console.log(3); // viec 3
//             setTimeout(function() {
//                 console.log(4); // viec 4
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


//=> Promise là gì ? cách hoạt động của nó ?
//Thuật ngữ ?

//cách hoạt động
//1. Pendding
//2. Fulfilled
//3. Reject

var promise = new Promise(
    //executor 
    //gọi function trước khi nhận được đối tượng promise
    // được thực thi khi gọi Promise()
    //truyền 2 hàm resolve-reject
    function(resolve, reject) {
        //Logic
        //Luôn luôn gọi 1 trong 2 thằng, hoặc cả 2
        //Thành công: resolve()
        //Thất bại: reject();

        // resolve();
        // reject();


        //fake call api
        // resolve([{
        //     id: 1,
        //     name: 'javascript',
        // }]);
        // reject('bug');

        resolve();
    }
); 

//Tính chất chuỗi



//thường sử dụng
//.then(callback) được gọi khi resolve 
//.catch(callback) được gọi khi reject
// .finally(callback) khi xong cong viec


//.then().then()...
//then trước return về cái gì thì là tham số
//truyền vào then đằng sau
//=> giảm thiểu trường hợp callback hell
//nếu return về promise, thì sẽ return về chính cái
//promise mà được gọi

promise.then(function() {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve([1,2,3]);
        }, 3000);
    })

    }).then(function(value) {
        console.log(value);
    }).catch(function(error) {
        console.log('Fail');
        console.error(error);
     }).finally(function() {
        console.log('done');
})

//
