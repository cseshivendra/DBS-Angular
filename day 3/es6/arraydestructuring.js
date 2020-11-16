// two types of destrucuring. arrays and object

const team = ["Virat", "Rohit", "Raina", "Chahal"];

const captainStr = team[0];
const vCaptainStr = team[1];

const printDetails = function ([captain, vCapatin]) {
    console.log(`The captain is ${captain} and the vice captain is ${vCapatin}`);
}

printDetails(team);
