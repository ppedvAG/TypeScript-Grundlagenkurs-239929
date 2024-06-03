const myStringReadonly = "Hello World";
// myStringReadonly = "another"; // Fehler weil const readonly ist

let myStringLiteral = "Hallo Welt";
myStringLiteral = "Hi world";

let myString: string;
// console.log(typeof myString); // verhindert TS weil myString noch nicht initialisiert wurde
myString = "new string";
// myString = true; // verhindert TS und wirft einen Fehler. In JS waere es okay
console.log("typeof variable myString is", typeof myString); // gibt string aus

const PI = 3.1419;
console.log("typeof variable PI is", typeof PI); // gibt number aus

let myNumber: number;
myNumber = 3;
myNumber = 3.141;
myNumber = 42e90;
myNumber = 42 / 11;
myNumber = 0xf4;

let howAreYou: boolean = true;
// howAreYou = 0; // Geht nicht weil variable vom typ boolean ist
console.log("typeof variable howAreYou is", typeof howAreYou); // gibt boolean aus

// Mit einem 'Union Operator' (die Pipe: |) koennen wir typescript sagen, dass unsere variablen mehr typen zulaesst
let myBoolean: boolean | number = true;
myBoolean = 0;
console.log("typeof variable myBoolean is", typeof myBoolean); // gibt number aus

let varWithoutValue = null;
console.log("typeof variable varWithoutValue is", typeof varWithoutValue); // gibt object aus
console.log();

// Object-Type-Literal
type Person = {
  name: string;
  age: number;
};

const person1: Person = {
  name: "Hugo",
  age: 27,
  // color: 'red' // geht nicht weil wir das nicht im Typ-Literal definiert haben
};

// person1 = {}; // geht nicht weil als const reference definiert
console.log("typeof variable person1 is", typeof person1); // gibt object aus

// typescript feature interface
interface IPerson {
  firstName: string;
  lastName: string;
  nickName: string | undefined;
  color?: string; // wie nickName ist dieser Parameter optional aber muss nicht initialisiert werden
}

const otherPerson: IPerson = {
  firstName: "Karl",
  lastName: "Klammer",
  nickName: undefined,
};
console.log("typeof variable otherPerson is", typeof otherPerson); // gibt object aus

// Arrays in TypeScript
let someArray: number[];
someArray = [42, 99];
someArray[5] = 5;
someArray.push(37);
console.log("array contents", someArray);
console.log("typeof variable someArray is", typeof someArray); // gibt object aus
console.log("is someArray an array?", Array.isArray(someArray)); // gibt true aus

// Arrays sind auch Objekte mit der Besonderheit, dass der key eine aufsteigende Number ist statt ein custom string
const arrayLikeObject = {
  0: "a",
  1: "b",
  2: "c",
};
console.log("is arrayLikeObject an array?", Array.isArray(arrayLikeObject)); // gibt false aus

const mixedArray: Array<unknown> = [42, "number", false];
console.log("typeof 1st item is", typeof mixedArray[0]); // gibt number aus
console.log("typeof 2nd item is", typeof mixedArray[1]); // gibt string aus

delete mixedArray[0];
console.log("typeof 1st item is", typeof mixedArray[0]); // gibt undefined aus

const myFunc = new Function();
console.log("typeof variable myFunc is", typeof myFunc); // gibt function aus

// Union Types
type MixedType = number | undefined | "default" | "my awesome value";
let randomVar: MixedType;
randomVar = 42;
randomVar = "default";
// randomVar = 'abc'; // geht nicht weil kein gueltiger Typ
randomVar = "my awesome value";
