import { ILoadable, Transporter } from './transporter.class';
import { Truck, Car, Vehicle } from './vehicle.class';

function testVehicle(vehicle: Vehicle) {
    console.log(vehicle.showInfo());
    console.log(vehicle.startMotor());
    console.log(vehicle.accelerate(150));
    console.log(vehicle.showInfo());
    console.log(vehicle.stopMotor());
    console.log(vehicle.stopMotor());
}

function testDerived(vehicle: Vehicle) {
    console.log(vehicle.showInfo());
    console.log(vehicle.startMotor());
}

function testInterface(vehicle: ILoadable, payload: Vehicle) {
    console.log(vehicle.showInfo());
    console.log(vehicle.load(payload));
    try {
        console.log(vehicle.load(new Car('BMW M5', 5)));
    } catch (error: any) {
        console.error('ERROR:', error.message);
    }
    const [message] = vehicle.unload();
    console.log(message);
}

const opel = new Car('Opel Astra F', 4, 4e3, 220);
testVehicle(opel);
console.log();

const scania = new Truck('Scania', 1e5, 160, 'Diesel');
testDerived(scania);
console.log();

const iveco = new Transporter('Iveco', 123000, 120);
testInterface(iveco, opel);
