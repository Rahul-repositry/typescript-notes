"use strict";
// How to declare datatype in typescript
let surname = "smith";
let secondname = "smithy";
let thirdname = "smithyie"; // on hover we can get the datatype
//Union dataypes
let Unionsurname; // it can be both number and string
Unionsurname = 2343;
Unionsurname = "string";
///function
const func = (n, m) => {
    console.log(n, m);
    return n * m;
};
const func2 = (n, m) => {
    console.log(n, m);
    return String(n * m);
}; // func2  is returning a string instead of number by automatically detecting the return no need to write explicitly
