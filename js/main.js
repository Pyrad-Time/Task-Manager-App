
const list = document.getElementById('task-list')
const input = document.getElementById('search')
const status = document.getElementById('status')
const button = document.getElementsByTagName('button')

const btn = [...button]

import { state } from "./state.js"
import { render } from "./render.js"


export function setLocalStorage () {
    const tasks = localStorage.setItem("state", JSON.stringify(state.tasks))
}

export function getLocalStorage() {
    const data = localStorage.getItem("tasks")  

    if(data) {
        state.tasks = JSON.parse(data)
    }

}

btn.forEach(e => {
    e.addEventListener("click", (e) => {
        const data = e.target.dataset.filter
        state.status = data
        render(list)
        getLocalStorage()
    })
})

input.addEventListener("input", (e) => {
    state.current = e.target.value 
    console.log(state)
    setLocalStorage()
    render(list)
})

