function Person(name, age) {
    this.name = name
    this.age = age
}

var person1 = new Person('소녀시대',20);

Person.prototype.walk = function(speed) {
    console.log(speed + 'km 속도로 걸어갑니다')
};

var person2 = new Person('시대',21);

console.dir(person1.walk)
console.dir(person2.walk)