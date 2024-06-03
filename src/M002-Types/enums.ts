type StringNumberPair = [string, number];

let myPair: StringNumberPair = ["foo", 32];
myPair[1] = -1; // so greife ich auf ein Item des tuples zu; nicht mit array zu verwechseln
// myPair[0] = 2; // geht nicht weil muss ein string sein
// myPair[2] = 2; // geht nicht weil nicht im tuple definiert
console.log("Ausgabe meines tuples", myPair);
console.log("Type of StringNumberPair", typeof myPair);

// don't use enums. Sie sind sehr komisch...
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Bessere Alternativen zu enums: Type-Literal
type DirectionType = "Up" | "Down" | "Left" | "Right";
let direction: DirectionType = "Up";

// Zweite Alternative ist ein readonly object.
// Details zur Erklaerung hier: https://youtu.be/jjMbPt_H3RQ
const directionObj = {
  up: 1,
  down: 2,
  left: 3,
  right: 4,
} as const;

// directionObj.down = 42; // as const verhindert Zuweisung eines anderen Wertes

type ObjectValues<T> = T[keyof T];
type DirectionType2 = ObjectValues<typeof directionObj>;

function setDirection(value: DirectionType2) {
  // do something
}

setDirection(3);
