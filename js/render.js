import { filterTask } from "./filter.js";
import { showTask } from "./task.js";
import {state} from "./state.js"
import { getLocalStorage } from "./main.js";
import { setLocalStorage } from "./main.js";
const list = document.getElementById('task-list')

if(localStorage.getItem("tasks")) {
    getLocalStorage()
    render(list)
} else {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
        state.tasks = data
        setLocalStorage()
        render(list)
    }
    )

}



export function render(list) {
    list.textContent = ''
    const filtered = state.tasks.filter(filterTask)
    filtered.forEach(task => showTask(task, list))
}
