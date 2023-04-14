const modalWindow = document.querySelector('.modal__window'),
      modalInput = document.querySelector('.modal__input'),
      modalApply = document.querySelector('.btn__modal'),
      boardBtn = document.querySelector('.btn__create-board'),
      boardZone = document.querySelector('.board__zone')



boardBtn.addEventListener('click', () =>{
    createModal()
})

modalApply.addEventListener('click', () =>{
    let boardName = modalInput.value
    deleteModal()
    createBoard(boardName)
})

function createBoard(text) {
    const boardTempl = `
        <div class="board">
            <div class="board__head">
                <span class="board__name" contenteditable="true" spellcheck="true">${text}</span>
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

    boardZone.innerHTML += boardTempl
    addLocal(text)
}