var User = (fstName, lstName, age = 18) => {
    this.fstName = fstName;
    this.lstName = lstName;
    this.age = age;
    this.getName = function() {
        return `${this.fstName} ${this.lstName}`;
    }
    this.setName = (newAge) => {
        this.age = newAge;
    }
}

var author = new User('Long', 'Pham');
var user = new User('Ha', 'Ngoc');

author.title = 'Tui ten la Thien Long';

user.comment = 'Ngoc Ha ne';

console.log(author);
console.log(user);

author.setName(200);
console.log(author);