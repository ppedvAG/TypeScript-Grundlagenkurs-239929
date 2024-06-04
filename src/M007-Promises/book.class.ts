export interface BookDetails {
    title: string;
    pages: number;
    author?: string;
    notes?: string;
}

export function getBookDetails(): BookDetails {
    return {
        title: 'TypeScript for Dummies',
        pages: 123,
        author: 'Unknown',
    };
}

export function addBookNotes<T extends BookDetails>(book: T, notes: string): T {
    return {
        ...book,
        notes,
    };
}

export function printBookDetails(book: BookDetails) {
    console.log(`Fetched book with title '${book.title}' and ${book.pages} pages. \n\t--> Notes:`, book.notes);
}
