export namespace Course {
    export interface IStudent {
        firstName: string;
        lastName: string;
        fullName: string;
        greet(): void;
    }

    export class StudentExplicit implements IStudent {
        firstName: string;
        lastName: string;
        fullName: string;

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = `${firstName} ${lastName}`;
        }

        greet(): void {
            throw new Error('Method not implemented.');
        }
    }

    export class Student {
        fullName: string;

        constructor(public firstName: string, public lastName: string) {
            this.fullName = `${firstName} ${lastName}`;
        }

        greet(): void {
            console.log('Mein name ist ' + this.fullName);
        }
    }

    export class VirtualStudent extends Student {
        constructor(nickName: string) {
            super(nickName, '');
        }

        override greet(): void {
            console.warn('Hi ' + this.fullName);
        }
    }
}
