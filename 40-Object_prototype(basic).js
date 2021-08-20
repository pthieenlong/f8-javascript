/*
    Object prototype

    1.Prototype là gì?
    - Cấu thành nên constructor
    - Gồm method, property

*/

function User(fstName, lstName, age = 18) {
    this.fstName = fstName;
    this.lstName = lstName;
    this.age = age;
    this.getName = function() {
        return `${this.fstName} ${this.lstName}`;
    }

    
}

User.prototype.className = 'F8';
var author = new User('Long', 'Pham');

console.log(author);
