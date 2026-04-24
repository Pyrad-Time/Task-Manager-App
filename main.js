
const list = document.getElementById('task-list')
const input = document.getElementById('search')
const status = document.getElementById('status')
const button = document.getElementsByTagName('button')

const btn = [...button]


let state = {
    current: '',
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
}

function render() {
    list.textContent = ''

    state.tasks.forEach(e => {
        
        if (e.completed === true) {
            if(state.status === "completed") {
                showTask(e)
            }

        }

        if (!e.completed) {
            if(state.status === "pending") {
                showTask(e)
            }
        }

        if(state.status === "all")
            showTask(e)

    })
    
}


btn.forEach(e => {
    e.addEventListener("click", (e) => {
        const data = e.target.dataset.filter
        state.status = data
        render()
    })
})

input.addEventListener("keypress", (e) => {
    state.current = Number(state.current + e.key)

})

