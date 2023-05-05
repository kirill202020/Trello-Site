let board
let usersArr

!localStorage.board ? board = [] : board = JSON.parse(localStorage.getItem('board'))
!localStorage.users ? users = [] : users = JSON.parse(localStorage.getItem('user'))

const addLocal = () =>{
    localStorage.setItem('board', JSON.stringify(board))
}
const addLocalUsers = () =>{
    localStorage.setItem('user', JSON.stringify(users))
}


