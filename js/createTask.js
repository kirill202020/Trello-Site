const applyTask = document.querySelector('.btn-task-modal'),
      modalTaskInput = document.querySelector('#task__name__input'),
      taskDescr = document.querySelector('.modal-descr'),
      modalChoose = document.querySelector('.modal-choose'),
      deadline = document.querySelector('.deadline'),
      tasksZone = document.querySelector('.tasks__zone'),
      taskModal = document.querySelector('.task-modal'),
      createTaskBtn = document.querySelector('.create__task__btn')
let tasksArr = []


function createTask() {
    createTaskModal()

    applyTask.addEventListener('click', () =>{
        let taskName = modalTaskInput.value
        let taskDescription = taskDescr.value
        let taskTag = modalChoose.value
        let taskDate = deadline.value
        console.log(taskName);
        console.log(taskDescription);
        console.log(taskTag);
        console.log(taskDate);
        const task = `
            <div class="task-card">
                <p class="name">${taskName}</p>
                <div class="tag">${taskTag}</div>
            </div>
        `
        modalTaskInput.value = ''
        tasksZone.innerHTML += task
    
    
        closeTaskModal()
    })
}





function TaskCon(name, description, tag, date) {
    this.name = name
    this.description = description
    this.tag = tag
    this.date = date
}

// applyTask.addEventListener('click', () =>{
//     tasksArr += new TaskCon()
// })