// let draggableItem = null
// let taskCards
// let taskZone

// function dragDrop () {
//     taskCards = document.querySelectorAll('.task-card')
//     tasksZone = document.querySelectorAll('.tasks__zone')
//     taskCards.forEach(task => {
//         task.addEventListener('dragstart', () =>{
//             draggableItem = task
//             setTimeout(() =>{
//                 task.style.display = 'none'
//                 deleteTask(task.id)
//             }, 0)
//         })

//         task.addEventListener('dragend', () =>{
//             setTimeout(() =>{
//                 task.style.display = 'flex'
//                 draggableItem = null
//             }, 0);
//         })
//     });
//     tasksZone.forEach (zone =>{
//         zone.addEventListener('dragover', function(e){
//             e.preventDefault()
//         })

//         zone.addEventListener('dragenter', function(e){
//             e.preventDefault()
//         })

//         zone.addEventListener('drop', function (e) {
//             let currentTask = draggableItem
//             currentTask.id = zone.id
//             tasks.push(new TaskCon(currentTask.name, currentTask.description, currentTask.tag, currentTask.date, currentTask.boardId, currentTask.id))
//             this.append(draggableItem)
//         })
//     })
// }
// dragDrop()

const tasksDrag = document.querySelectorAll('.task-card')
const dropZones = document.querySelectorAll('.board')

// Add event listeners to tasks for drag events
tasksDrag.forEach((task) => {
	task.addEventListener('dragstart', dragStart)
	task.addEventListener('dragend', dragEnd)
})

// Add event listeners to drop zones for drop events
dropZones.forEach((dropZone) => {
	dropZone.addEventListener('dragover', dragOver)
	dropZone.addEventListener('dragenter', dragEnter)
	dropZone.addEventListener('dragleave', dragLeave)
	dropZone.addEventListener('drop', drop)
})

// Drag event handlers
function dragStart(event) {
	event.dataTransfer.setData('text/plain', event.target.id)
}

function dragEnd(event) {
	// Clean up any highlighting or effects
	tasksDrag.forEach((task) => task.classList.remove('dragging'))
}

// Drop event handlers
function dragOver(event) {
	event.preventDefault()
}

function dragEnter(event) {
	event.target.classList.add('dragging')
}

function dragLeave(event) {
	event.target.classList.remove('dragging')
}

function drop(event) {
	event.preventDefault()
	const taskId = event.dataTransfer.getData('text/plain')
	const task = document.getElementById(taskId)
	event.target.appendChild(task)
	event.target.classList.remove('dragging')
}
