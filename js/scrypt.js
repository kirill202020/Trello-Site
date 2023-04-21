function fillBoard() {
    usersBoards.innerHTML = ''
    if (board.length > 0) {
        board.forEach(item => {
            console.log(item);
            usersBoards.innerHTML += createBoard(item)
        });
    }
}


fillBoard()