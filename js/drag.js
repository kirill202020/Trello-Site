let draggableItem = null

function dragDrop () {
    tasks.forEach(task => {
        task.addEventListener('dragstart', () =>{
            draggableItem = task
            setTimeout(() =>{
                task.style.display = 'none'
            }, 0)
        })

        task.addEventListener('dragend', () =>{
            setTimeout(() =>{
                task.style.display = 'flex'
                draggableItem = null
            }, 0);
        })
    });
}
dragDrop()