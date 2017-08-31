class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const data = [
    new Employee('John', 'Snow'),
    new Employee('Ann', 'Smith'),
    new Employee('Jim', 'Morrison'),
    new Employee('Jim', 'Doe')
];

data.sort((a, b) => {
    let ret = a.firstName.localeCompare(b.firstName);
    if (ret === 0) {
        ret = a.lastName.localeCompare(b.lastName);
    }
    return ret;
});

console.log(data);