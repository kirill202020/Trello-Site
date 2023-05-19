function createTaskInfoModal() {
    tasks.forEach(element => {
        element.addEventListener('click', ()=>{
            return`
                <div class="modal tap-on-card">
                    <span class="yourtask-text">Your Task</span>
                    <div class="info">
                        <p>Task Name:  <span contenteditable="true" spellcheck="true">${element.name}</span></p>
                        <p>Task Tag: <span contenteditable="true" spellcheck="true">${element.tag}</span></p>
                        <p>Task Description: <span contenteditable="true" spellcheck="true">${element.description}</span></p>
                        <p>Task Deadline: <span contenteditable="true" spellcheck="true">${element.date}</span></p>
                    </div>
                    <button class="btn btn-apply-changes">Apply</button>
                </div>
            `
        })
    });    
}      
createTaskInfoModal()