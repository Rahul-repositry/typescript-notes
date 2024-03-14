//Type assertion

interface Person {
  name: string;
  email: string;
  // [key: string]: string; // all key will be string
}

const myobj: Person = {
  name: "Abhi ",
  email: "abhi",
};
const getName = (): string => {
  return myobj.name;
};
const getEmail = (): string => {
  return myobj.email;
};
const getData = (key: string): string => {
  return myobj["name"];
};
const getData2 = (
  key: keyof Person /* name | email (all key of Person will appear here so user can pass only person keys) */
): string => {
  return myobj["name"];
};
console.log(myobj.name);
