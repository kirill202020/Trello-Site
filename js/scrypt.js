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
            console.log(index);
            tasksZone.forEach(element => {
                console.log(index);
                if (item.boardId == element.id) {
                    element.innerHTML += createTasks(item.name, item.tag, item.id, index)
                }
            taskList = new List('usersboards', options);
            });});}
// dragDrop()

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