/*
    Array methods:

    forEach(callback function);
    
    every(callback function) kiem tra phan tu thoa man dieu kien;
        return bool
        function nay kiem tra tat ca phan tu
        phai dung voi dk thi return true;

    some(callback function) cung <=> every nhung chi can 1 dk thoa man
        se return true;
    
    find(callback function)

    map()
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
]


courses.forEach(function(course, index) {
    console.log(index, course);
});


var isFree = courses.every(function(course, index) {
    console.log(index);
    return course.coin === 0;
});
console.log(isFree);

console.log(courses.some(function(course, index) {
        console.log(index);
        return course.coin === 0;
}));

var find = courses.find(function(course, index) {
    return course.name === 'php';
});

console.log(find);
