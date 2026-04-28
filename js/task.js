export function showTask(e, list) {
    const li = document.createElement('li')
    const p = document.createElement('p')

    li.textContent = e.title
    p.textContent = e.completed
    list.append(li)   
    li.append(p)
}