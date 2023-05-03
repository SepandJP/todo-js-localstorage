/**
 * Show tasks with DOM
 */

const trash = '<img src="images/trash-icon.svg" alt="trash task">'
const check = '<img src="images/check-icon.svg" alt="check done task">'
const checked = '<img src="images/checked-icon.svg" alt="uncheck undone task">'

export class createDOM {
    displayTasks(tasks) {
        const tasksDOM = document.querySelector('#todo-tasks-list')
        tasksDOM.innerHTML = ''
        tasks.forEach(item => {
            tasksDOM.appendChild(this.createTaskDOM(item))
        })
    }

    createTaskDOM(task) {
        const taskElement = document.createElement('li')
        const checkTask = document.createElement('button')
        const taskTitle = document.createElement('p')
        const trashTask = document.createElement('button')

        taskElement.setAttribute('class', 'items')
        checkTask.innerHTML = task.done ? checked : check
        taskTitle.setAttribute('class', `${task.done ? 'done-item' : 'undone-item'}`)
        taskTitle.textContent = task.title
        trashTask.innerHTML = trash

        checkTask.addEventListener('click', () => {
            
        })
        trashTask.addEventListener('click', () => {
            
        })

        taskElement.appendChild(checkTask)
        taskElement.appendChild(taskTitle)
        taskElement.appendChild(trashTask)

        return taskElement
    }
}
