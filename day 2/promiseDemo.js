const loanStatus = function (flag, timer = 2000) {
    return new Promise((resolve, reject) => {
        if (flag) {
            setTimeout(() => resolve("Congratulations for the loan amount ..."), timer);
        } else {
            setTimeout(() => reject("Rejected due to bad loan history ..."), timer);
        }
    });
}

const promise = loanStatus(false, 2000);
console.log("The status of promise ");
console.log(loanStatus)

promise.then((data) => {
    console.log("The status of loan application is " + data)
    console.log("The status of promise is ");
    console.log(loanStatus);
}).catch(error => {
    console.log("error " + error);
    console.log(loanStatus);
});
