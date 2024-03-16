// // How to declare datatype in typescript

// let surname: string = "smith";
// let secondname = <string>"smithy";
// let thirdname = "smithyie"; // on hover we can get the datatype

// //Union dataypes

// let Unionsurname: string | number; // it can be both number and string
// Unionsurname = 2343;
// Unionsurname = "string";

// ///function

// // const func = (n: number, m: number): number => {
// //   console.log(n, m);
// //   return n * m;
// // };

// const func2 = (n: number, m: number) => {
//   console.log(n, m);
//   return String(n * m);
// }; // func2  is returning a string instead of number by automatically detecting the return no need to write explicitly

// //Type aliases

// type aliasSurname = string | Number; // add more datatypes

// let aliaName: aliasSurname = "John";

// //In funciton

// type aliaFunc = (n: string, m: string) => string;

// const alia: aliaFunc = (n, m) => {
//   console.log(n, m);
//   return n + m;
// }; // make funciton simple and more freindly to read.
