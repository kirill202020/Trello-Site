function fillBoard() {
    usersBoards.innerHTML = ''
    if (board.length > 0) {
        board.forEach((item, index) => {
            console.log(item);
            usersBoards.innerHTML += createBoard(item, index)
        });
    }
}
function fillUsers() {
    users.innerHTML = ''
    if (board.length > 0) {
        board.forEach((item, index) => {
            console.log(item);
            usersBoards.innerHTML += createBoard(item, index)
        });
    }
}


fillBoard()