import { setLocalStorage } from "./main.js"
import { render } from "./render.js"
import { state } from "./state.js"
const list = document.getElementById('task-list')


export function showTask(task, list) {
    const li = document.createElement('li')
    const p = document.createElement('p')
    const btnEdit = document.createElement('button')
    const btnDel = document.createElement('button')
    const inputCheck = document.createElement('input')
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')

    p.textContent = task.title
    btnEdit.textContent = "Edit"
    btnDel.textContent = "Delete"
    inputCheck.type = "checkbox"


    li.className = "task"
    li.id = task.id
    btnEdit.className = "button__task"
    btnDel.className = "button__task"
    inputCheck.className = "inputcheck__task"
    div1.className = "div1"
    div2.className = "div2"
    p.className = "task__title"

    btnEdit.dataset.action = "edit"
    btnDel.dataset.action = "delete"

    p.id = task.id

    list.append(li)   
    div1.append(inputCheck, p)
    div2.append(btnEdit, btnDel)
    li.append(div1, div2)
}

export function editTask (e) {  
    const task = e.target.closest(".task")
    const taskId = Number(task.id)

    const existingInput = task.querySelector(".task__input")
    if (existingInput) return

    const title = task.querySelector(".task__title")
    if (!title) return

    const input = document.createElement("input")
    input.className = "task__input"
    input.value = title.textContent

    title.replaceWith(input)
    input.focus()

    input.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {

            state.tasks = state.tasks.map(t => {
                if (t.id === taskId) {
                    return { ...t, title: input.value }
                }
                return t
            })

            setLocalStorage()
            render(list)
        }
    })
}

 export function removeTask (e) {
    const task = e.target.closest(".task")
    const taskId = Number(task.id)

    state.tasks = state.tasks.filter(t => t.id !== taskId)

    setLocalStorage()
    render(list)
 }

