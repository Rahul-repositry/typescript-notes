// //classes

// class Player {
//     readonly id: string;
//     private height: number; //cannot access anywhere other than this class
//     protected weight: number; // can access in extends
//     age: number; // default public

//     constructor(height: number, weight: number, age: number) {
//       this.height = height;
//       this.weight = weight;
//       this.age = age;
//       this.id = String(Math.random());
//     }
//   }

//   class Player2 extends Player {
//     special: boolean;
//     constructor(height: number, weight: number, age: number, special: boolean) {
//       super(height, weight, age);
//       this.special = special;
//     }
//   }

//   const abhi = new Player(200, 75, 34);
//   const abhi2 = new Player2(200, 75, 34, true);
//   console.log(abhi2);
//   console.log(abhi);

//   //Now classes with interface and implemnts

//   interface ProductType {
//     name: string;
//     price: number;
//     stock: number;
//     id: string;
//     offer?: boolean;
//   }

//   class Product implements ProductType {
//     public name: string;
//     public price: number;
//     public stock: number;
//     public id: string = String(Math.random() * 1000);

//     constructor(name: string, price: number, stock: number) {
//       this.name = name;
//       this.price = price;
//       this.stock = stock;
//     }
//   }
