const applyTask = document.querySelector('.btn-task-modal'),
      modalTaskInput = document.querySelector('#task__name__input'),
      taskDescr = document.querySelector('.modal-descr'),
      modalChoose = document.querySelector('.modal-choose'),
      deadline = document.querySelector('.deadline'),
      taskModal = document.querySelector('.task-modal')
let tasksArr = []
let btnId


function getBtnId() {
    createTaskBtns = document.querySelectorAll('.create__task__btn')
    createTaskBtns.forEach(el => {
        el.addEventListener('click', () =>{
            btnId = el.id
        })
    });
}

function getInfoTask() {
    console.log(10);
    createTaskModal()
    applyTask.addEventListener('click', () =>{
        let taskName = modalTaskInput.value
        let taskDescription = taskDescr.value
        let taskTag = modalChoose.value
        let taskDate = deadline.value
        let taskId = btnId
        
        modalTaskInput.value = ''
        taskDescr.value = ''
        modalChoose.value = ''
        deadline.value = 'To Do'
        tasksZone = document.querySelectorAll('.tasks__zone')
        tasksZone.forEach(element => {
        if (btnId == element.id) {
            tasks.push(new TaskCon(taskName, taskDescription, taskTag, taskDate, taskId))
            element.innerHTML += createTasks(taskName, taskTag, taskId)
            btnId = ''
        }
        return
    });
        addLocalTasks()
        closeTaskModal()    
    })
    
}
addLocalTasks()

function TaskCon(name, description, tag, date, id) {
    this.name = name
    this.description = description
    this.tag = tag
    this.date = date
    this.id = id
}

function createTasks(taskName, taskTag, taskId) {
    return `
    <div class="task-card" id="${taskId}">
        <p class="name">${taskName}</p>
        <div class="tag">${taskTag}</div>
    </div>
`
}

getBtnId()


