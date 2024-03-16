// type funcType = (...m: number[]) => number[]; // spread operator function

// function log(n: number): number {
//   console.log("w234r");
//   return n;
// }

// //funciton with object
// interface Product {
//   name: string;
//   stock: number;
//   price: number;
//   photo?: string;
// }

// type GetDataType = (product: Product) => void;

// const getData: GetDataType = (product) => {
//   console.log(product);
// };

// const productOne: {
//   name: string;
//   stock: number;
//   price: number;
//   photo?: string;
// } = {
//   name: "iphone",
//   stock: 10,
//   price: 599,
// };

// getData(productOne);

// //Never Type

// const errorHandler = () => {
//   // throw new Error();
//   return new Error();
// }; // it throws a never type when nothing is return while throwing error but if  we use return then type will be error

// //when never datype is used ?
// // The never type in TypeScript represents the type of values that never occur. For example, a function that always throws an error and never reaches a return statement can be given a return type of never.
