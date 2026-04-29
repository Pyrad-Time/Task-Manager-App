import {state} from "./state.js"


const e = state.status

export function filterTask(e) {
    let current = state.current.toLowerCase()    
    let status = state.status
    let apiTitle = e.title.toLowerCase()
    console.log('filter')
    const matchText = apiTitle.includes(current)

    const matchStatus = 
        status === "all" ||
        (status === "completed" && e.completed) ||
        (status === "pending" && !e.completed)

    return matchText && matchStatus
}