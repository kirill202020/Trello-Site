let draggableItem = null
let taskCards
let taskZone

function dragDrop () {
    taskCards = document.querySelectorAll('.task-card')
    tasksZone = document.querySelectorAll('.tasks__zone')
    taskCards.forEach(task => {
        task.addEventListener('dragstart', () =>{
            draggableItem = task
            setTimeout(() =>{
                task.style.display = 'none'
                deleteTask(task.id)
            }, 0)
        })

        task.addEventListener('dragend', () =>{
            setTimeout(() =>{
                task.style.display = 'flex'
                draggableItem = null
            }, 0);
        })
    });
    tasksZone.forEach (zone =>{
        zone.addEventListener('dragover', function(e){
            e.preventDefault()
        })

        zone.addEventListener('dragenter', function(e){
            e.preventDefault()
        })

        zone.addEventListener('drop', function (e) {
            let currentTask = draggableItem
            currentTask.id = zone.id
            tasks.push(new TaskCon(currentTask.name, currentTask.description, currentTask.tag, currentTask.date, currentTask.boardId, currentTask.id))
            this.append(draggableItem)
        })
    })
}
dragDrop()