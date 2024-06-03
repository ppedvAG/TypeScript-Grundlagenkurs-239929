namespace Module004 {
    interface IPerson {
        firstName: string;
        lastName: string;
    }

    function identity<T>(arg: T): T {
        return arg;
    }

    console.log(identity<string>('Hello World'));
    console.log(identity<number>(42));

    function addFullNameToPerson<T extends IPerson>(ext: T) {
        return {
            // Mit spread operator ... wird das object 'geflatet'
            // Funktioniert fuer object als auch array
            ...ext,
            fullName: `${ext.firstName} ${ext.lastName}`,
        };
    }

    // Dieser Typ wird von TSC implizit aus dem Kontext abgeleitet
    type PersonWithFullName = IPerson & {
        fullName: string;
    };

    // ist das selbe wie PersonWithFullName
    interface IPersonWithFullName extends IPerson {
        fullName: string;
    }

    // alte Schreibweise bevor es den spread Operator gab
    function addFullNameToPersonOld<T extends IPerson>(ext: T): IPersonWithFullName {
        return Object.assign(
            {
                fullName: `${ext.firstName} ${ext.lastName}`,
            },
            ext
        );
    }

    const student: IPerson = {
        firstName: 'John',
        lastName: 'Doe',
    };
    const studentWithDetails = addFullNameToPerson(student);
    console.log('Student: ', studentWithDetails);
    console.log();

    type PersonKeys = keyof PersonWithFullName; // 'fullName' | 'firstName' | 'lastName';
    console.log('Keys von IPerson', Object.keys(studentWithDetails));
    console.log('Values von IPerson', Object.values(studentWithDetails));
    Object.entries(studentWithDetails).forEach((keyValuePair) => {
        console.log(keyValuePair[0], keyValuePair[1]);
    });

    function getProperty<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }
    console.log('Full name from dynamic function:', getProperty(studentWithDetails, 'fullName'));
    console.log();

    // Utility Types
    type PartialPerson = Partial<PersonWithFullName>;

    const empyStudent: PartialPerson = {};

    function update(id: string, data: PartialPerson) {
        // send partial data to server
    }

    type VirtualPerson = Pick<PersonWithFullName, 'fullName'>;
    const virtualStudent: VirtualPerson = {
        fullName: 'Nicky',
        // firstName: 'abc' // gibt es nicht weil wir den Type mit Pick 'eingeschraenkt' haben
    };

    type ReducedPerson = Omit<PersonWithFullName, 'fullName'>;
    const reduced: ReducedPerson = {
        // fullName: '' // gibt es nicht weil ausgenommen
        firstName: 'Jane',
        lastName: 'Doe',
    };

    // Utility Type Record<K extends string | number | symbol, T>
    interface CatInfo {
        age: number;
        breed: string;
    }

    type CatName = 'miffy' | 'boris' | 'mordred';

    const cats: Record<CatName, CatInfo> = {
        miffy: { age: 10, breed: 'Persian' },
        boris: { age: 5, breed: 'Maine Coon' },
        mordred: { age: 16, breed: 'British Shorthair' },
    };

    const randomJson: Record<string, unknown> = {
        foo: '123',
        bar: false,
        obj: {},
        array: [{}],
    };
}
