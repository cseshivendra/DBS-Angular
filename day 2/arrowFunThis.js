console.log("variable name and msg inside the outer function", name, msg);
console.log(this);
const that = this;
const innerfun = function () {
    console.log("Inside the Inner Function ");
    console.log("variable name and msg insi")
}