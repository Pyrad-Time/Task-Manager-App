
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
    const data = localStorage.getItem("state")  

    if(data) {
        state.tasks = JSON.parse(data)
    }

}

function editTask (e) {  
    const task = e.target.closest(".task")
    const title = task.querySelector(".task__title")
    console.log(title)
 }


list.addEventListener("click", (e) => {
    const button = e.target.closest("button")
    if(!button) return

    if(button.dataset.action === "edit")
        editTask(e)
})


btn.forEach(buttons => {
    buttons.addEventListener("click", (e) => {
        console.log(e)
        if(e.currentTarget.dataset.filter) {
            const data = e.target.dataset.filter
            state.status = data
            getLocalStorage()    
            render(list)
        }
        if(e.currentTarget.dataset.action === "edit") {
            editTask(e)
            getLocalStorage()
            render(list)
        }
        
    })
})

input.addEventListener("input", (e) => {
    state.current = e.target.value 
    console.log(state)
    setLocalStorage()
    render(list)
})

