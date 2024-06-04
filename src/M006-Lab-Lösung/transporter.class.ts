import { Vehicle } from './vehicle.class';

export class Transporter extends Vehicle implements ILoadable {
    public otherVehicle?: Vehicle;

    constructor(name: string, price: number, maxV: number) {
        super(name, price, maxV);
    }

    load(other: Vehicle): void {
        if (!this.otherVehicle) {
            this.otherVehicle = other;
        } else {
            throw Error('Transporter bereits beladen mit einem ' + this.otherVehicle.name);
        }
    }
    unload(): [string, Vehicle?] {
        if (this.otherVehicle) {
            const vehicle = this.otherVehicle;
            this.otherVehicle = undefined;
            return [`${vehicle.name} ausgeladen.`, vehicle];
        }
        return ['Transporter hat kein Fahrzeug geladen.'];
    }

    override showInfo(): string {
        return `${super.showInfo()} Er kann ein weiteres Fahrzeug laden.`;
    }
}

export interface ILoadable {
    otherVehicle?: Vehicle;
    load(other: Vehicle): void;
    unload(): [string, Vehicle?];
    showInfo(): string;
}
