const button = document.querySelector('#button-task')
const input = document.querySelector('#input-task')
const totalList = document.querySelector('.to-do-list')

let toDoList = []

function addNewTask() {
    toDoList.push({
        task: input.value,
        done: false
    })

    input.value = ''

    showTasks()
}

function showTasks() {
    let newLi = ''

    toDoList.forEach((item, index) => {
        newLi = newLi + `
        
        <li class="item ${item.done && "done"}">
            <img src="./images/check.png" onclick="doneTask(${index})">
            <p> ${item.task} </p>
            <img src="./images/860829.png" class="delete" onclick="deleteTask(${index})">
        </li>
        `
    })

    totalList.innerHTML = newLi

    localStorage.setItem('lista', JSON.stringify(toDoList))

}

function doneTask (index) {
    toDoList[index].done = !toDoList[index].done

    showTasks()
}

function deleteTask(index) {
    toDoList.splice(index, 1)
    
    showTasks()
}

function recarregarTarefas () {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage) {
        toDoList = JSON.parse(tarefasDoLocalStorage)
    }
    showTasks()
}

recarregarTarefas ()
button.addEventListener('click', addNewTask)