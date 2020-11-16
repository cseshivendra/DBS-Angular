// drawbacks of the var keyword

var i = 10;
i = "hello world";

// method local variables
// variables in javascript function do not have a block scope
// variables in javascript function have the function scope.
var myAwesomeFunction = function () {
    var j;
    console.log("The value of j is " + j);
    // console.log("The value of index is " + index);
    j = 10;
    console.log("The value of j after initialization is " + j);
}
// myAwesomeFunction();

var loopFun = function () {
    for (var loop = 0; loop < 10; loop++) {}
    console.log("The value of loop outside is " + loop);
}
// loopFun();

// let and const

/*
  1. let keyword give the block scope 
  2. const keyword also gives the block scope but are final in nature
*/

let name = "Pradeep";
// let name = "Kiran";
name = "Rajesh";

var loopFun = function () {
    for (let loop = 0; loop < 10; loop++) {}
    // console.log("The value of loop outside is " + loop);
}()
// iffee

// const is a stricter version of let keyword
const value = 10000;
// value = 20000;

const user = {
    name: 'vinay',
    age: 24
};

const unmodifiableUser = Object.freeze(user);
// Not possible user = {};
user.name = "praveen";
unmodifiableUser.name = "cannot change";
console.log("user name is " + user.name);
