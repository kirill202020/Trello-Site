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
	createTaskBtns.forEach((el) => {
		el.addEventListener('click', () => {
			btnId = el.id
		})
	})
}

function getInfoTask() {
	createTaskModal()
	applyTask.addEventListener('click', () => {
		let taskName = modalTaskInput.value
		let taskDescription = taskDescr.value
		let taskTag = modalChoose.value
		let taskDate = deadline.value
		let taskBoardId = btnId
		let taskId = tasks.length + 1
		if (taskName && taskDescription) {
			modalTaskInput.value = ''
			taskDescr.value = ''
			modalChoose.value = 'Without any tag'
			deadline.value = ''
			tasksZone = document.querySelectorAll('.tasks__zone')
			tasksZone.forEach((element) => {
				if (btnId == element.id) {
					tasks.push(
						new TaskCon(
							taskName,
							taskDescription,
							taskTag,
							taskDate,
							taskBoardId,
							taskId
						)
					)
					element.innerHTML += createTasks(taskName, taskTag, taskId)
					btnId = ''
				}
				return
			})
			addLocalTasks()
			closeTaskModal()
			// dragDrop()
		} else {
			applyTask.style.background = '#d52626'
			applyTask.attributes += 'disabled'
			if (taskName && taskDescription) {
				applyTask.style.background = '#04454d'
				applyTask.attributes += 'enable'
			}
		}
	})
}
addLocalTasks()

function TaskCon(name, description, tag, date, boardId, id) {
	this.name = name
	this.description = description
	this.tag = tag
	this.date = date
	this.boardId = boardId
	this.id = id
}

function createTasks(taskName, taskTag, taskId, index) {
	return `
    <div class="task-card" onclick="createTaskInfoModal(${taskId})" id="${taskId}" draggable="true">
        <div class="card__info__part">
            <p class="name">${taskName}</p>
            <div class="tag">${taskTag}</div>
        </div>
        <button class="btn delete-task" onclick="deleteTask(${index})">X</button>
    </div>
`
}
getBtnId()
