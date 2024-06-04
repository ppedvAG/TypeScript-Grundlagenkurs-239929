import { info } from 'console';
import { BookDetails, addBookNotes, getBookDetails, printBookDetails } from './book.class';

console.log('Start module');
setTimeout(() => console.log('2 secs later'), 2000);

let bookFromServer: BookDetails = {} as BookDetails;

// Evolutionsschritt 1: Callback functions
// ---------------------------------------

// Häufiges Konstrukt in der Praxis sind Callback functions
const callback = () => (bookFromServer = getBookDetails());

setTimeout(callback, 0);

// Abgefragtes Buch ist Leer, weil Daten in einem anderen Zyklus gesetzt werden
console.log('Object is empty because executed in sync:', bookFromServer);

// Evolutionsschritt 2: Callback functions in Promises kapseln
// -----------------------------------------------------------
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

function createPromise(shouldWork = true): Promise<BookDetails> {
    const promise = new Promise<BookDetails>((resolve, reject) => {
        if (shouldWork) {
            setTimeout(() => resolve(getBookDetails()), 500);
        } else {
            reject('I had a bad day.');
        }
    });
    return promise;
}

const workingBook = createPromise();
workingBook.then((book) => addBookNotes(book, 'Buch mit Promises')).then((book) => printBookDetails(book));

const failingBook = createPromise(false);
failingBook
    .then(function (book) {
        return addBookNotes(book, 'Wird nicht funktionieren!');
    })
    .catch(function (reason) {
        console.error('*** ERROR ***', reason);
    })
    .finally(() => {
        // Abfrage aufraeumen
    });

// Evolutionsschritt 3: async/await abstrahiert Promises und macht sie lesbarer
// ----------------------------------------------------------------------------

async function fetchBookAsync(shouldWork = true): Promise<void> {
    try {
        // Falls ein promise 'rejected' wird, muessen wir es mit try/catch abfangen!
        const anotherBook = await createPromise(shouldWork);
        const bookWithNotes = addBookNotes(anotherBook, 'Hier haben wir async/await verwendet.');
        printBookDetails(bookWithNotes);
    } catch (error) {
        console.error('Catched error', error);
    }
}

fetchBookAsync();
fetchBookAsync(false);

// Beispiel API abfragen mit der nodejs fetch API
interface CatFact {
    fact: string;
    lenght: number;
}

(async () => {
    try {
        const result: Response = await fetch('https://catfact.ninja/fact');
        const json: CatFact = await result.json();
        console.log(json.fact);
    } catch (error) {
        console.log(error);
    }
})();
