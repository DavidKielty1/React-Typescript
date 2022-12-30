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

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Dave",
  age: 24,
};

let people: Person[];

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

//Functions & Types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split("");
