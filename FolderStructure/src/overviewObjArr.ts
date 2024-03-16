// With arrr

const arr: number[] = [1, 2, 3];
const arr2: (string | number)[] = ["sad", "mad", 2, 1];
const arr3: Array<string | number> = ["hello", 12, "world"];

//obj

type obj = {
  height: number;
  weight: number;
}; // we dont use type in object bcz in future it  can be changed. instead of that we use interface which can extends .

interface obj1 {
  height: number;
  weight: number;
  gender?: boolean; // this is now optional
}

type funcType = (n: number, m: number) => void; //declare individually and use  as a type for better readablility;

interface newObj extends obj1 {
  scholar: boolean;
  man: string;
  func?: funcType;
}

//implementation

const gigi: newObj = {
  height: 160,
  weight: 58.5,
  scholar: true,
  man: "Gigih",
  func: (n, m) => {
    console.log(n * m);
  },
};

const gigi2: obj1 = {
  ...gigi,
  gender: false,
};
console.log(gigi2);
console.log(gigi);
