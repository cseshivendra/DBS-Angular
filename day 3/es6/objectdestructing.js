const user = {
    age: 33,
    salary: 45000,
    address: {
        city: 'Bangalore',
        state: 'KA',
        zip: 577142
    }
}

const name = "Pradeep";
const {
    name: username = "Test",
    age: userAge,
    salary,
    address
} = user;

console.log(`User ${username} aged around ${userAge} with salary of ${salary} staying in ${
    address.city
} `);


const printUserDetails = function ({
    name: username = "Jane ",
    age: userAge
}) {
    console.log(`User name is ${username}`)
}


// function to convert the currency

const currecnyCalculator = function (amount) {
    return {
        rupees: amount * 40,
        dollors: amount,
        euros: amount * 1.2
    }
}


const {rupees: INR, euros: EUR} = currecnyCalculator(1000);

console.log(`currency of 1000 in INR is ${INR} and in Euros is ${EUR}`);

const rupeeFun = function ({rupees: INR}) {
    console.log(`Indian Rupees ${INR}`)
}
