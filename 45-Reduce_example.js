//Vi du 1
var numbers = [100, 200, 220, 2130, 480];
var total = numbers.reduce((sumOfNumber, number) => sumOfNumber + number, initial = 0);
console.log(total);



//Flat - "Làm phẳng" mảng từ Depth Array - "mảng sâu";
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function(flatOutput, index) {
    return flatOutput.concat(index);
}, []);
console.log(flatArray);

//Lay ra khoa hoc dua vao 1 mang moi

var topics = [
    {
    topic: 'Front-end',
    courses: [
        {
            id: 1,
            title: 'HTML/CSS',
        },
        {
            id: 2,
            title: 'Javascript',
        },
    ],
    },
    {
    topic: 'Back-end',
    courses: [
        {
            id: 3,
            title: 'NodeJS',
        },
        {
            id: 4,
            title: 'Mongodb',
        },
    ],
    }
];


var newCourses = topics.reduce(function(course, topic){
    return course.concat(topic.courses);
}, []);

console.log(newCourses);

var html = newCourses.map(function(course) {
    return `
    <div>
        <h2>${course.id} <span>${course.title}</span></h2>
    </div>
    `;
});
    

console.log(html.join(''));

var body = document.getElementById('body');
body.innerHTML = html;