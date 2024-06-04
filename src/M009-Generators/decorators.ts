namespace decorators {
    class Calculator {
        @logMethod
        add(a: number, b: number) {
            return a + b;
        }
    }

    function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`Method ${propertyKey} called with args: ${JSON.stringify(args)}`);
            return originalMethod.apply(this, args);
        };
        return descriptor;
    }

    const calc = new Calculator();
    calc.add(2, 3); // Logs: Method add called with args: [2,3]
}
