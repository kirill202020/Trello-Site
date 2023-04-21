const modalWindow = document.querySelector('.modal__window'),
      modalInput = document.querySelector('.modal__input'),
      modalApply = document.querySelector('.btn__modal'),
      boardBtn = document.querySelector('.btn__create-board'),
      boardZone = document.querySelector('.board__zone'),
      usersBoards = document.querySelector('.users__boards')

function ObjCon(name) {
    this.name = name
}


    
    
boardBtn.addEventListener('click', () =>{
    createModal()
})

modalApply.addEventListener('click', () =>{
    let boardName = modalInput.value
    if (boardName) {
        board.push(new ObjCon(boardName))
        fillBoard()
        addLocal()
    }
    modalInput.value = ''
    closeModal()
    createBoard(boardName)
})

function createBoard(item) {
    return `
        <div class="board">
            <div class="board__head">
                <span class="board__name" contenteditable="true" spellcheck="true">${item.name}</span>
                <div class="task__btn__zone">
                    <button class="btn task__btn create__task__btn">+</button>
                    <button class="btn task__btn delete__task__btn">X</button>
                </div>
            </div>
            <div class="tasks__zone">
                <div class="task__card">
                    
                </div>
            </div>
        </div>
    `
}




