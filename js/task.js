export function showTask(e, list) {
    const fragment = document.createDocumentFragment()
    const li = document.createElement('li')
    const p = document.createElement('p')
    const btnEdit = document.createElement('button')
    const btnDel = document.createElement('button')
    const inputCheck = document.createElement('input')

    p.textContent = e.title
    btnEdit.textContent = "Edit"
    btnDel.textContent = "Delete"
    inputCheck.type = "checkbox"


    li.className = "task"
    btnEdit.className = "btnTask"
    btnDel.className = "btnTask"
    
    list.append(li)   
    li.append(inputCheck)
    li.append(p)
    li.append(btnEdit, btnDel)
}