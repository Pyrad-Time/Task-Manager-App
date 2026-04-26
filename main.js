
const list = document.getElementById('task-list')
const input = document.getElementById('search')
const status = document.getElementById('status')
const button = document.getElementsByTagName('button')

const btn = [...button]


let state = {
    current: "",
    tasks: [],
    status: 'all'
}



fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => state.tasks = data)
    .then(render)



function showTask(e) {
    const li = document.createElement('li')
    const p = document.createElement('p')

    li.textContent = e.title
    p.textContent = e.completed
    list.append(li)   
    li.append(p)

    console.log('KKKKKK')
}


function filterTask(e) {
    let current = state.current.toLowerCase()    
    let status = state.status
    let apiTitle = e.title.toLowerCase()

    const matchText = apiTitle.includes(current)

    const matchStatus = 
        status === "all" ||
        (status === "completed" && e.completed) ||
        (status === "pending" && !e.completed)

    return matchText && matchStatus
}

function render() {
    list.textContent = ''
    const filtered = state.tasks.filter(filterTask)
    filtered.forEach(showTask)
}

btn.forEach(e => {
    e.addEventListener("click", (e) => {
        const data = e.target.dataset.filter
        state.status = data
        render()
    })
})

input.addEventListener("input", (e) => {
    state.current = e.target.value 
    render()
})

