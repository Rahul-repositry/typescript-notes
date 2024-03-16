// //Type Assertion

// const btn = document.getElementById("btn") as HTMLButtonElement;
// const btn1 = <HTMLElement>document.getElementById("btn");
// const btn2 = document.getElementById("btn")!;

// const img = document.querySelector("img") as HTMLImageElement; //HTMLImage

// const form = document.querySelector("form") as HTMLFormElement; //HTMLForm
// const myInput = document.querySelector("form > input") as HTMLInputElement;
// console.log(form);
// form.onsubmit = (e) => {
//   e.preventDefault();
//   let value = Number(myInput.value);
//   let h1 = document.createElement("h1");
//   h1.textContent = String(value);
//   let button = document.createElement("button");
//   button.textContent = "Delete";
//   button.onclick = (e) => {
//     h1.remove();
//   };
//   h1.append(button);
//   document.body.appendChild(h1);
// };
