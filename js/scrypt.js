function fillBoard() {
    usersBoards.innerHTML = ''
    if (board.length > 0) {
        board.forEach((item, index) => {
            usersBoards.innerHTML += createBoard(item, index)
        });
    }
    tasksZone = document.querySelectorAll('.tasks__zone')

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
