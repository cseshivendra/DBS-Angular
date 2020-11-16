const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise one resolved ...."), 2000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise two resolved ...."), 3000);
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise three resolved ...."), 1000);
})
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise four resolved ...."), 2000);
})

// event-hell
/*
promise1.then(res => {
    promise2.then(res => {
        promise3.then(res => {
            promise4.then(finalRes => {

            })
        })
    })
})
*/


// aync await
async function execute() {
    await promise1;
    console.log("This message will be printed after promise one has been resolved ");
    await promise2;
    console.log("This message will be printed after promise two has been resolved");
    await promise3;
    console.log("This message will be printed after promise three has been resolved");
    await promise4;
    console.log("This message will be printed after promise four has been resolved");
}

execute();
