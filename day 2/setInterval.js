const handler = setInterval(function () {
    console.log("Will execute at a regular interval ....");
}, 1000);

(function run(timer) {
    setTimeout(function () {
        clearInterval(handler);
    }, timer)
})(10000);
