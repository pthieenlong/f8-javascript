/*
    Array MAP methods:
    map(function)

    ben trong map la 1 vong lap
    se goi lai 1 function va thuc thi
    
    function return ve cai gi thi element se la cai do


    return array
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

var newCourses = courses.map((course) => {
    // return {
    //     id: course.id,
    //     name: `Khoa hoc: ${course.name}`,
    //     coin: course.coin,
    //     coinText: `Gia: ${course.coin}`,
    //     index: index,
    //     originArray: originArray,
    // }
    return `<h2>${course.name}</h2>`;
});
var str = newCourses.join('');
str.replace(', ', '');

document.getElementById('text').innerHTML = str;
// console.log(newCourses);