const applyTask = document.querySelector('.btn-task-modal'),
      modalTaskInput = document.querySelector('#task__name__input'),
      taskDescr = document.querySelector('.modal-descr'),
      modalChoose = document.querySelector('.modal-choose'),
      deadline = document.querySelector('.deadline'),
      taskModal = document.querySelector('.task-modal'),
      createTaskBtns = document.querySelectorAll('.create__task__btn')
let tasksArr = []
let btnId


function getBtnId() {
    createTaskBtns.forEach(el => {
        el.addEventListener('click', () =>{
            btnId = el.id
        })
    });
    // console.log(btnId);
}

function createTask() {
    createTaskModal()
    applyTask.addEventListener('click', () =>{
        let taskName = modalTaskInput.value
        let taskDescription = taskDescr.value
        let taskTag = modalChoose.value
        let taskDate = deadline.value
        const task = `
            <div class="task-card">
                <p class="name">${taskName}</p>
                <div class="tag">${taskTag}</div>
            </div>
        `
        modalTaskInput.value = ''
        taskDescr.value = ''
        modalChoose.value = ''
        deadline.value = 'To Do'
        tasksZone = document.querySelectorAll('.tasks__zone')
        tasksZone.forEach(element => {
            if (btnId == element.id) {
                element.innerHTML += task
                btnId = ''
            }
            return
        });

        closeTaskModal()
    })
}

function TaskCon(name, description, tag, date) {
    this.name = name
    this.description = description
    this.tag = tag
    this.date = date
}

getBtnId()