let n = 10;
let numberAsString = n.toFixed(2);
console.log('number n is', numberAsString, 'and type is', typeof numberAsString);

let value: unknown = 'string';
value = 10; // typeof value === 'number'
// value.toFixed(); // Error weil value is unknown

let newValue = (<number>value).toFixed();

const someDate = new Date(1999, 12, 31);
const someString = new String('foo');

console.log('type of Date', typeof someDate); // return object
console.log('instance of Date', someDate instanceof Date); // return true

interface IFoo {
    someAttr: string;
}

// Interfaces existieren nicht ausserhalb von Typescript weshalb instanceof so nicht funktioniert
const bar: IFoo = { someAttr: '' };
console.log('instance of bar', bar instanceof Object); // returns true

// in ist ein operator in JavaScript
console.log('check by property', 'someAttr' in bar); // returns true;
console.log('check by property', 'fiction' in bar); // returns false;
console.log();

function someAmbigiousFunc(arg: string | number) {
    if (typeof arg === 'number') {
        const nowItsAString = arg.toFixed();
        console.log('This is a string now', nowItsAString);
    } else if (arg.match('Hello')) {
        // Typescript weiss implizit, dass es ein string sein muss, weil oben auf number geprueft wurde.
        console.log('Jackpot gewonnen!');
    }
}

// Type Castings vs. Type Assertion
let someNumberString = '0';
// let castedNumber = <number>someNumberString; // geht nicht, weil Type Assertion und kein Casting!
let num1 = parseInt(someNumberString); // Casting zu number
let num2 = Number(someNumberString); // Casting zu number
let numShort = +someNumberString; // Casting zu number (shortcut: plus Operator)
console.log('converted to num', num1, typeof num1);

let bool = Boolean(num2); // Casting zu einem boolean
let boolShort = !!numShort; // Casting zu einem boolean (shortcut: doppelte Negierung)
console.log('converted to bool', bool, typeof bool);

let boolAsString = String(bool);
console.log('converted to string', boolAsString, typeof boolAsString);

// Funktionen
function repeatString(text: string, times?: number): string | undefined {
    if (times && times > 0) {
        return text.repeat(times || 1);
    }
    return undefined;
}
function repeatStringAlt(text: string, times = 5): string {
    return text.repeat(times);
}

console.log('1 star', repeatString('*', 1));
console.log('default length of stars', repeatStringAlt('*'));

function printAll(strs: string | string[] | null) {
    if (strs === null) {
        return;
    }
    // Unterscheidung nicht moeglich, da object [] oder null sein kann
    if (typeof strs === 'object') {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === 'string') {
        console.log(strs);
    } else {
        // do nothing
    }
}

// Pfeilfunktionen
let add = (x: number, y: number): number => x + y;

// Template literals
// In C#: var myString = $"My string {var1} bla blub.";
console.log(`String templates with variables
    ${num1}
    and very long stories
    ${bool}
`);

function myTag(strings: TemplateStringsArray, personExp: string, ageExp: number) {
    const ageStr = ageExp < 100 ? 'youngster' : 'centenarian';
    return `${strings[0]}${personExp}${strings[1]}${ageStr}${strings[2]}`;
}

const personName = 'Mike';
const personAge = 20;
const output = myTag`That ${personName} is a ${personAge}`;
console.log(output); // That Mike is a youngster
