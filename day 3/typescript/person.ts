class Person {

    private name : string;
    private age : number;
    private salary : number;


    getName(): string {
        return this.name;
    }

    setName(name : string) {
        this.name = name;
    }

    getAge(): number {
        return this.age;
    }

    setAge(age : number): void {
        this.age = age;
    }

    getSalary(): number {
        return this.salary;
    }

    setSalary(sal : number): void {
        this.salary = sal;
    }
}

const naveen = new Person();
naveen.setName("Naveen");
console.log(naveen.getName());
