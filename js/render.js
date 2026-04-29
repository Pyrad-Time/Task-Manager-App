import { filterTask } from "./filter.js";
import { showTask } from "./task.js";
import {state} from "./state.js"

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => state.tasks = data)
    .then(() => render(list))

const list = document.getElementById('task-list')

export function render(list) {
    list.textContent = ''
    const filtered = state.tasks.filter(filterTask)
    filtered.forEach(task => showTask(task, list))
}
