let standardBoards = [
    {
        title: 'To Do',
        id: 0,
    },
    {
        title: 'In progress',
        id: 1,
    },
    {
        title: 'Done',
        id: 2,
    },
]
const modalWindow = document.querySelector('.modal__window'),
      modalInput = document.querySelector('.modal__input'),
      modalApply = document.querySelector('.btn__modal'),
      boardBtn = document.querySelector('.btn__create-board'),
      boardZone = document.querySelector('.board__zone'),
      usersBoards = document.querySelector('.users__boards'),
      standardBoardsZone = document.querySelector('.standard__boards')
      

function ObjCon(name, id) {
    this.name = name
    this.id = id
}

const addStandardBoards = () =>{
    standardBoardsZone.innerHTML = ''
    standardBoards.forEach(el => {
        let boardName = el.title
        let boardId = el.id
        mainBoard.push(new ObjCon(boardName, boardId))
        standardBoardsZone.innerHTML += `
            <div class="board list">
                <div class="board__head">
                    <span class="board__name" contenteditable="true" spellcheck="true">${boardName}</span>
                    <div class="task__btn__zone">
                        <button class="btn task__btn create__task__btn" onclick="getInfoTask()" id="zone${boardId}">+</button>
                    </div>
                </div>
                <div class="tasks__zone" id="zone${boardId}">
                </div>
            </div>
        `
        addStandardLocal()
    });
}
addStandardBoards()
    
boardBtn.addEventListener('click', () =>{
    createModal()
})

modalApply.addEventListener('click', () =>{
    let boardName = modalInput.value
    let boardId = board.length*1 + 3
    if (boardName) {
        board.push(new ObjCon(boardName, boardId))
        fillBoard()
        addLocal()
    }
    modalInput.value = ''
    closeModal()
    createBoard(boardName, boardId)
    getBtnId()
})

function createBoard(item, index) {
    return `
        <div class="board list">
            <div class="board__head">
                <span class="board__name" contenteditable="true" spellcheck="true">${item.name}</span>
                <div class="task__btn__zone">
                    <button class="btn task__btn create__task__btn" onclick="getInfoTask()" id="zone${index+3}">+</button>
                    <button class="btn task__btn delete__board__btn" onclick='deleteBoard(${index})'>X</button>
                </div>
            </div>
            <div class="tasks__zone ${item.name}" id="zone${index+3}">
            </div>
        </div>
    `
}

