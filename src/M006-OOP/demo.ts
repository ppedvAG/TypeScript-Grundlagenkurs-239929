import { Course } from './student.class';

new Course.Student('John', 'Doe').greet();
const virtual = new Course.VirtualStudent('Jonny');
virtual.greet();

// Interfaces
interface Animal {
    name: string;
    makeSound(): void;
}

class Dog implements Animal {
    constructor(public name: string) {}

    makeSound(): void {
        console.log(`${this.name} said: wuff!`);
    }
}

const myDog: Animal = new Dog('Hello');
myDog.makeSound();
console.log({
    instanceof: myDog instanceof Dog,
    typeof: typeof Dog,
});

const myDuck: Animal = {
    name: 'Duffy',
    makeSound() {
        console.log('quack');
    },
};
myDuck.makeSound();

const myBunny = {
    name: 'Bugs',
    makeSound() {
        console.log('Hi doc!');
    },
} as Animal;
myBunny.makeSound();
