const deleteBoard = index =>{
    board.splice(index, 1)
    addLocal()
    fillBoard()
}

const deleteTask = index =>{
    tasks.splice(index, 1)
    addLocalTasks()
    tasksZone = document.querySelectorAll('.tasks__zone')
    tasksZone.forEach(element => {
        element.innerHTML = ''
    });
    fillTasks()
}
