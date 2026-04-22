
const list = document.getElementById('task-list')
const input = document.getElementById('search')
const status = document.getElementById('status')


let state = {
    current: '',
    tasks: [],
}



fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => state.tasks = data)
    .then(render)


function render() {
    list.textContent = ''
    state.tasks.forEach(e => {
        const li = document.createElement('li')
        li.textContent = e.id
        list.append(li)
           
    })
    
}

input.addEventListener("keypress", (e) => {
    state.current = Number(state.current + e.key)

})