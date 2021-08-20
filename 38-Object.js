function User(name, age) {
    this.name = name;
    this.age = age;
}
var author = {
    name: 'long',
    age: 18,

    getName: function (){
        return this.name;
    },
    setName: function (newName){
        this.name = newName;
    }
};

console.log(author);
author.setName('Ha');
console.log(author.name);

