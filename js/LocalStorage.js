let board
let mainBoard
let usersArr
let tasks

!localStorage.board ? board = [] : board = JSON.parse(localStorage.getItem('board'))
!localStorage.mainBoard ? mainBoard = [] : mainBoard = JSON.parse(localStorage.getItem('mainBoard'))
!localStorage.users ? users = [] : users = JSON.parse(localStorage.getItem('user'))
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'))


const addStandardLocal = () =>{
    localStorage.setItem('mainBoard', JSON.stringify(mainBoard))
}
const addLocal = () =>{
    localStorage.setItem('board', JSON.stringify(board))
}
const addLocalTasks = () =>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
const addLocalUsers = () =>{
    localStorage.setItem('user', JSON.stringify(users))
}


