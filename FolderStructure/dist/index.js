"use strict";
function log(n) {
    console.log("w234r");
    return n;
}
const getData = (product) => {
    console.log(product);
};
const productOne = {
    name: "iphone",
    stock: 10,
    price: 599,
};
getData(productOne);
//Never Type
const errorHandler = () => {
    // throw new Error();
    return new Error();
}; // it throws a never type when nothing is return while throwing error but if  we use return then type will be error
//when never datype is used ?
// The never type in TypeScript represents the type of values that never occur. For example, a function that always throws an error and never reaches a return statement can be given a return type of never.
