const execute = function (timer) {
    return function () {
        setTimeout(function () {
            console.log("This method will be invoked after some time .... " + timer)
        }, timer);
    }
}

const executeAfter2Sec = execute(2000);
const executeAfter5Sec = execute(5000);

executeAfter5Sec();

// console.log("This line will be printed and will not wait for the reponse time ....");
