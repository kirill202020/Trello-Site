let board

!localStorage.board ? board = [] : board = JSON.parse(localStorage.getItem('board'))

const addLocal = () =>{
    localStorage.setItem('board', JSON.stringify(board))
}
