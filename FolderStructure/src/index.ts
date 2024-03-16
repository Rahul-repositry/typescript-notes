// Define the Person type
type Person = {
  name: string;
  age: number;
};

// Generic function
const func = <T>(n: T): T => {
  return n;
};

// Create a Person object
const person1: Person = {
  name: "abhi",
  age: 2,
};

// Call the function with the correct type parameter
const ans = func<Person>(person1);
console.log(ans); // Output: { name: 'abhi', age: 2 }

const func2 = <T, U>(n: T, o: U): { n: T; o: U } => {
  return { n, o };
};
const ans2 = func2<number, string>(20, "lol");

const users: Person[] = [
  {
    name: "rahul",
    age: 23,
  },
  {
    name: "hitesh",
    age: 33,
  },
  {
    name: "mukesh",
    age: 33,
  },
  {
    name: "rajesh",
    age: 53,
  },
  {
    name: "salesh",
    age: 13,
  },
];

const filterPerson = <A, U extends keyof A, V>(
  arr: A[],
  key: U,
  value: A[U]
) => {
  return arr.filter((a) => a[key] === value) as A[];
};

const filterPeople = filterPerson(users, "name", "rajesh");
console.log(filterPeople); //
