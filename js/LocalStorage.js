let board
let mainBoard
let usersArr

!localStorage.board ? board = [] : board = JSON.parse(localStorage.getItem('board'))
!localStorage.mainBoard ? mainBoard = [] : mainBoard = JSON.parse(localStorage.getItem('mainBoard'))
!localStorage.users ? users = [] : users = JSON.parse(localStorage.getItem('user'))


const addStandardLocal = () =>{
    localStorage.setItem('mainBoard', JSON.stringify(mainBoard))
}
const addLocal = () =>{
    localStorage.setItem('board', JSON.stringify(board))
}
const addLocalUsers = () =>{
    localStorage.setItem('user', JSON.stringify(users))
}


