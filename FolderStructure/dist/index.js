"use strict";
//Type Utility
// Partial<Type>
// Required<Type>
// Readonly<Type>
// Pick<Type, Keys>
// Record<Keys,Type>
// Omit<Type, Keys>
// Exclude<Type, ExludeUnion>
// Extract<Type, Union>
// NonNullable<Type>
// Parameters<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>
////-----------------///////
//Partial<Type>
// partial make the passed Type option even if it is mention required.
// type User = {
//   name:string,
//   email:string,
// }
// type User2 = Partial<User>
////-----------------///////
// Required<Type>
// This will remove all optional fields from a Type and make them required.
// type User3 = Required<User>
////-----------------///////
// Readonly<Type>
// type User2 = Readonly<User>
////-----------------///////
// Record<Keys,Type>
// interface UserInfo{
//   age:number;
// }
// type UserName = "john" | "levi" | "elon" | "jack";
// const users: Record<UserName,  UserInfo> = {
//   john:{age:18},
//   levi:{age:20},
//   elon:{age:25},
//   jack:{age:46}
// };
////-----------------///////
// Pick<Type, Keys> ?
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// }
// type UserWithoutEmail = Pick<User, 'id' | 'name' | 'age'>;
// const userWithoutEmail: UserWithoutEmail = {
//   id: 123,
//   name: 'John Doe',
//   age: 30,
// };
// In the example, the UserWithoutEmail type is created by picking the id, name, and age properties from the User interface. The resulting type does not include the email property.
// This can be useful when you want to work with a subset of the properties from an object type, for example, when creating DTOs (Data Transfer Objects) for API requests/responses or when implementing the Proxy pattern.
////-----------------///////
// Omit<Type, Keys>
//Vice versa of pick
// type UserWithoutEmail = Omit<User, 'id' | 'name' | 'age'>;
////-----------------///////
// Exclude<Type, ExludeUnion> ?
// type AvailableColors = 'red' | 'green' | 'blue';
// type NotAvailableColors = 'yellow' | 'purple';
// type Colors = Exclude<AvailableColors, NotAvailableColors>;
// const color: Colors = 'blue';
// 'In the example, the Colors type is created by excluding the NotAvailableColors from the AvailableColors union type. The resulting type only includes the members that are not present in the NotAvailableColors union.
// This can be useful when you want to filter out specific members from a union type or when working with conditional types.
////-----------------///////
// Extract<Type, Union> ?
// type myUnion = string | number | boolean
// type Random = Extract<myUnion,boolean> // extracts boolean from  the union
////-----------------///////
// NonNullable<Type>
// type myUnion = string | number | boolean | null | undefined
// type Random = NonNullable<myUnion>
//return  a new type that excludes null and undefined values
////-----------------///////
// Parameters<Type>
// const myfunc = (a:number,b:string) =>{
//   console.log(a,b)
// }
// type Random = Parameters<typeof myfunc>
////-----------------///////
// ReturnType<Type>
// const myfunc = (a:number,b:string) =>{
//   console.log(a,b)
//   return  "Hello World";
// }
// type Random = ReturnType<typeof myfunc>
////-----------------///////
// InstanceType<Type>
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = InstanceType<typeof SampleClass>;
// const user: Random = {
//   s: "44",
//   t: "234",
// };
