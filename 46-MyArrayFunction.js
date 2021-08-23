/*
    my array methods
*/


var courses = [
    'Javascript',
    'PHP',
    'Python',
]
courses.length = 10;

//forEach
Array.prototype.myForEach = function(callback) {
    for (const index in this) {
        if(this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}
// courses.myForEach(function(course, index, array) {
//     console.log(course, index, array);
// });
Array.prototype.myFilter = function (callback) {
    var output = [];
    for (var index in this) {
        if(this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if(result) {
                output.push(this[index]);
            }
        }
    }

    return output;

}

function Course(id, name, coin) {
    this.id = id;
    this.name = name;
    this.coin = coin;
}

var filterCourses = [
    js = new Course(1, 'javascript', 720),
    java = new Course(2, 'java core', 980),
    react = new Course(3, 'React JS', 500),
];

// filterCourses.length = 10

filterCourses.filter(function(course) {
    return course.coin > 700;
});

// console.log(filterCourses.myFilter(function(course, index, array) {
//     // console.log(course, index, array);
//     return course.coin > 700;
// }));

//mySome(); //return true / false

var someCourses = [
    js = new Course(1, 'javascript', 720),
    java = new Course(2, 'java core', 980),
    react = new Course(3, 'React JS', 500),
];
Array.prototype.mySome = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var checkPoint = callback(this[index], index, this); 
            if(checkPoint) {
                return true;
            }
        }
    }
    return false;
}


var someResult = someCourses.mySome(function(course, index, array) {
    return course.coin > 500;
});
// console.log(someResult);

//myEvery();

Array.prototype.myEvery = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var checkPoint = callback(this[index], index, this);
            if(!checkPoint) {
                return false;
            }
        }
    }
    return true;
}


var everyCourses = [
    js = new Course(1, 'javascript', 40),
    java = new Course(2, 'java core', 80),
    react = new Course(3, 'React JS', 550),
];

var everyResult = everyCourses.myEvery(function(course, index, array) {
    return course.coin < 500;
});

console.log(everyResult);