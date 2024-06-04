import { marked } from 'marked';
import { from, map, switchMap, take } from 'rxjs';

interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

async function getTodoList(): Promise<Todo[]> {
    try {
        const result: Response = await fetch('https://jsonplaceholder.typicode.com/todos');
        return result.json();
    } catch (error) {
        console.log(error);
    }
    return [] as Todo[];
}

export function renderTodoList(parent: HTMLElement) {
    let observable = from(getTodoList()).pipe(
        map((items) => items.map((todo) => `- [${todo.completed ? 'x' : ' '}] ${todo.title}`).slice(0, 10)),
        switchMap(async (items) => marked(items.join('\n')))
    );

    const output = document.createElement('div');
    output.classList.add('todoList');

    const button = document.createElement('button');
    button.innerText = 'Show Todo Item';
    button.addEventListener('click', async () => {
        observable.subscribe((todoList) => {
            output.innerHTML = todoList;
        });
    });
    parent!.appendChild(button);
    parent!.appendChild(output);
}
