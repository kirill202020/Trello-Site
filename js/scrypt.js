function fillBoard() {
    usersBoards.innerHTML = ''
    if (board.length > 0) {
        board.forEach((item, index) => {
            usersBoards.innerHTML += createBoard(item, index)
        });
    }
    tasksZone = document.querySelectorAll('.tasks__zone')
}





function fillTasks() {
    if (tasks.length > 0) {
        tasks.forEach((item, index) => {
            tasksZone.forEach(element => {
                if (item.id == element.id) {
                    element.innerHTML += createTasks(item.name, item.tag, item.id, index)
                }    
            });
            
});
}
dragDrop()
}







function fillUsers() {
    users.innerHTML = ''
    if (board.length > 0) {
        board.forEach((item, index) => {
            usersBoards.innerHTML += createBoard(item, index)
        });
    }
}


fillBoard()
fillTasks()