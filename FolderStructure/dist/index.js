"use strict";
const myobj = {
    name: "Abhi ",
    email: "abhi",
};
const getName = () => {
    return myobj.name;
};
const getEmail = () => {
    return myobj.email;
};
const getData = (key) => {
    return myobj["name"];
};
console.log(myobj.name);
