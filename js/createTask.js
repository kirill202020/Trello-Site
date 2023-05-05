const applyTask = document.querySelector('.btn-task-modal'),
      modalTaskInput = document.querySelector('#task__name__input'),
      taskDescr = document.querySelector('.modal-descr'),
      modalChoose = document.querySelector('.modal-choose'),
      deadline = document.querySelector('.deadline')
let tasksArr = []



applyTask.addEventListener('click', () =>{
    let taskName = modalTaskInput.value
    let taskDescription = taskDescr.value
    let taskTag = modalChoose.value
    let taskDate = deadline.value
    console.log(taskName);
    console.log(taskDescription);
    console.log(taskTag);
    console.log(taskDate);
    // if (taskName) {
    //     task.push(new TaskCon(taskName, taskDescr, taskTag, taskDate))
    //     fillBoard()
    //     addLocal()
    // }
    // modalTaskInput.value = ''
    // closeModal()
})


function TaskCon(name, description, tag, date) {
    this.name = name
    this.description = description
    this.tag = tag
    this.date = date
}

applyTask.addEventListener('click', () =>{
    tasksArr += new TaskCon()
})