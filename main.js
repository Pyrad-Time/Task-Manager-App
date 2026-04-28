
const list = document.getElementById('task-list')
const input = document.getElementById('search')
const status = document.getElementById('status')
const button = document.getElementsByTagName('button')

const btn = [...button]

import { state } from "./js/state.js"
import { render } from "./js/render.js"



btn.forEach(e => {
    e.addEventListener("click", (e) => {
        const data = e.target.dataset.filter
        state.status = data
        render(list)
    })
})

input.addEventListener("input", (e) => {
    state.current = e.target.value 
    console.log(state)
    render(list)
})

