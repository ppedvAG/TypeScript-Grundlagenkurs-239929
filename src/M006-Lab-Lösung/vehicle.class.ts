export abstract class Vehicle {
    private running: boolean = false;
    private currentV: number = 0;

    constructor(public name: string, private price?: number, private maxV = 100) {}

    accelerate(value: number): string {
        if (this.currentV + value < this.maxV) {
            this.currentV = this.currentV + value;
            return 'aktuelle Geschw: ' + this.currentV + 'km/h';
        } else {
            this.currentV = this.maxV;
            return 'max. Limit erreicht: ' + this.currentV + 'km/h';
        }
    }

    startMotor() {
        if (!this.running) {
            this.running = true;
            return `Der Motor von ${this.name} wurde gestartet.`;
        } else {
            return 'Fahrzeug war schon an';
        }
    }

    stopMotor = () =>
        // in dieser Syntax wird entweder false oder 'transport......' zurückgegeben
        this.running ? (this.running = false) : 'Fahrzeug war schon aus';

    showInfo() {
        return `${this.name} kostet ${this.price} Euro und könnte max. ${this.maxV} km/h fahren.`;
    }
}

export class Car extends Vehicle {
    constructor(name: string, public seats: number, price?: number, maxV?: number) {
        super(name, price, maxV);
    }

    override showInfo(): string {
        return `${super.showInfo()} Das Auto hat ${this.seats} Sitze.`;
    }
}

export class Truck extends Vehicle {
    constructor(name: string, price: number, maxV: number, public fuel: string) {
        super(name, price, maxV);
    }

    override showInfo(): string {
        return `${super.showInfo()} Der Laster fährt mit ${this.fuel}.`;
    }
}
