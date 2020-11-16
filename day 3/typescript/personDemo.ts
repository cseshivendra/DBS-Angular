import Person, {NATIONALITY, validateUser} from './Person';

const naveen = new Person("Naveen", 22, 25000);
const ravitej = new Person("Ravitej");
const kiran = new Person("Kiran", undefined, 25000);

naveen.salary = 45000;
kiran.age = 45;
kiran.name = "KIRAN";

console.log(naveen.name);
console.log(ravitej.name);
console.log(kiran.name);
console.log(`nationality is ${NATIONALITY}`)
console.log("Calling the function " + validateUser(null))
