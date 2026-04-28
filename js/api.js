import { render } from "./render.js";
import { state } from "./state.js";

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => state.tasks = data)
    .then(() => render())

