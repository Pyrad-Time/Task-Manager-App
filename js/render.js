import { filterTask } from "./filter.js";
import { showTask } from "./task.js";
import {state} from "./state.js"


export function render(list) {
    list.textContent = ''
    const filtered = state.tasks.filter(filterTask)
    filtered.forEach(task => showTask(task, list))
}
