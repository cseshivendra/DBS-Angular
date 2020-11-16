// Inside a method, you cannot use arrow functions.
const person = {
    age: 24,
    printAge: function () {
        console.log("The age is " + this.age);
    }
}
// person.printAge();

// Inside the event handles
// access to arguments keyword


var check = function () {
    console.log(arguments);
}
check(1);
check(2, 2);
check(2, 3, 4);
