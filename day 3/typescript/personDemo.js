var Person_1 = require('./Person');
var naveen = new Person_1["default"]("Naveen", 22, 25000);
var ravitej = new Person_1["default"]("Ravitej");
var kiran = new Person_1["default"]("Kiran", undefined, 25000);
naveen.salary = 45000;
kiran.age = 45;
kiran.name = "KIRAN";
console.log(naveen.name);
console.log(ravitej.name);
console.log(kiran.name);
console.log("nationality is " + Person_1.NATIONALITY);
console.log("Calling the function " + Person_1.validateUser(null));
