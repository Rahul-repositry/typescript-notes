"use strict";
// Generic function
const func = (n) => {
    return n;
};
// Create a Person object
const person1 = {
    name: "abhi",
    age: 2,
};
// Call the function with the correct type parameter
const ans = func(person1);
console.log(ans); // Output: { name: 'abhi', age: 2 }
const func2 = (n, o) => {
    return { n, o };
};
const ans2 = func2(20, "lol");
const users = [
    {
        name: "rahul",
        age: 23,
    },
    {
        name: "hitesh",
        age: 33,
    },
    {
        name: "mukesh",
        age: 33,
    },
    {
        name: "rajesh",
        age: 53,
    },
    {
        name: "salesh",
        age: 13,
    },
];
const filterPerson = (arr, key, value) => {
    return arr.filter((a) => a[key] === value);
};
const filterPeople = filterPerson(users, "name", "rajesh");
console.log(filterPeople); //
