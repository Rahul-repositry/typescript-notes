"use strict";
//Type assertion
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
const getData2 = (key /* name | email (all key of Person will appear here so user can pass only person keys) */) => {
    return myobj["name"];
};
console.log(myobj.name);
