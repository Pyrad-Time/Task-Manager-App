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
    btnEdit.className = "button__task"
    btnDel.className = "button__task"
    


    list.append(li)   
    div1.append(inputCheck, p)
    div2.append(btnEdit, btnDel)
    li.append(div1, div2)
}