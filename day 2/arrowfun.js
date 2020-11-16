const sum = (a, b) => a + b;

const players = ["Dhoni", "Kohli", "Rohit", "Hardik"];

const filterByName = (player) => player === "Dhoni";

const flag = filterByName("Dhoni");
console.log(flag);

const filteredPlayers = players.filter(player => {

    return player.length === 5;
});

const users = [
    {
        name: 'Prabat',
        salary: 10000,
        dept: 'HR'
    }, {
        name: 'Vinod',
        salary: 20000,
        dept: 'HR'
    }, {
        name: 'Krishna',
        salary: 40000,
        dept: 'FINANCE'
    }
];

const totalSalaryByDept = users.filter(user => user.dept === 'HR').map(user => user.salary).reduce((p, c) => p * c);

console.log("Total salary by department is " + totalSalaryByDept);
