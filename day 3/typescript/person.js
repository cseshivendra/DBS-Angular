var Person = (function () {
    function Person() {
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getSalary = function () {
        return this.salary;
    };
    Person.prototype.setSalary = function (sal) {
        this.salary = sal;
    };
    return Person;
})();
var naveen = new Person();
naveen.setName("Naveen");
console.log(naveen.getName());
