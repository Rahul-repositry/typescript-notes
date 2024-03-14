"use strict";
//Type Assertion
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn");
const btn2 = document.getElementById("btn");
const img = document.querySelector("img"); //HTMLImage
const form = document.querySelector("form"); //HTMLForm
const myInput = document.querySelector("form > input");
console.log(form);
form.onsubmit = (e) => {
    e.preventDefault();
    let value = Number(myInput.value);
    let h1 = document.createElement("h1");
    h1.textContent = String(value);
    let button = document.createElement("button");
    button.textContent = "Delete";
    button.onclick = (e) => {
        h1.remove();
    };
    h1.append(button);
    document.body.appendChild(h1);
};
