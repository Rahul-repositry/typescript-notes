"use strict";
// With arrr
const arr = [1, 2, 3];
const arr2 = ["sad", "mad", 2, 1];
const arr3 = ["hello", 12, "world"];
//implementation
const gigi = {
    height: 160,
    weight: 58.5,
    scholar: true,
    man: "Gigih",
    func: (n, m) => {
        console.log(n * m);
    },
};
const gigi2 = {
    ...gigi,
    gender: false,
};
console.log(gigi2);
console.log(gigi);
