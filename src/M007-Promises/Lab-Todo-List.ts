interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

async function fetchTodoList(url: string): Promise<Todo[]> {
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

async function printTodoList(take = 10, skip = 0) {
    const list = await fetchTodoList('https://jsonplaceholder.typicode.com/todos');
    console.log(`show ${take} of ${list.length} items.`);
    console.table(list.slice(skip, skip + take));
}

printTodoList();
