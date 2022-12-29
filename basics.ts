// Primitives: number, string, boolean, null, undefined, symbols
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 9;

let userName: string;

userName = "David";

let isInstructor: boolean;

isInstructor = true;

// More Complex types

let hobbies: string[];

hobbies = ["one", "two", "three"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Dave",
  age: 24,
};

let people: {
  name: string;
  age: number;
}[];

people = [
  {
    name: "Dave",
    age: 24,
  },
  {
    name: "John",
    age: 27,
  },
];

//Type Inference
let course: string | number = "React - The Complete Guide";

course = 12341;
