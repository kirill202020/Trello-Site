const deleteBoard = index =>{
    board.splice(index, 1)
    addLocal()
    fillBoard()
}
