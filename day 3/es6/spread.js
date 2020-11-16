const depts = ['HR', 'Finance', 'Payroll'];
const projectTeams = ['Medlife', 'Hitachi', 'TUI'];

const consolidatedTeams = [
    ... depts,
    ... projectTeams
]

console.log(consolidatedTeams)

const fruits = ['banana', 'grapes', 'mango', 'papaya'];
const veggies = ['tomato', 'brinjal', 'beans'];

const eateries = [
    ... fruits,
    'pakoda',
    'samosa',
    'idli',
    ... veggies
]

console.log(eateries);
