const tapOnCard = document.querySelector('.tap-on-card'),
      pTaskName = document.querySelector('.info-name'),
      pTaskTag = document.querySelector('.info-tag'),
      pTaskDescr = document.querySelector('.info-descr'),
      pTaskDate = document.querySelector('.info-date'),
      closeModalBtn = document.querySelector('.btn-apply-changes')


function createTaskInfoModal(id) {
    tasks.forEach(element => {
        if (element.id = id) {
            tapOnCard.style.display = 'flex'
            pTaskName.innerHTML = element.name
            pTaskTag.innerHTML = element.tag
            pTaskDescr.innerHTML = element.description
            pTaskDate.innerHTML = element.date
        }
    });
}



function closeTaskINfoModal() {
    pTaskName.innerHTML = ''
    pTaskTag.innerHTML = ''
    pTaskDescr.innerHTML = ''
    pTaskDate.innerHTML = ''
    tapOnCard.style.display = 'none'
}