/**
 * Show tasks with DOM
 */

const trash = '<img src="images/trash-icon.svg" alt="trash task">'
const check = '<img src="images/check-icon.svg" alt="check done task">'
const checked = '<img src="images/checked-icon.svg" alt="uncheck undone task">'

export class createDOM {
    displayTasks(tasks) {
        const tasksDOM = document.querySelector('#todo-tasks-list')
        let result = ''
        tasks.forEach(item => {
            // const 
            result += `
            <li class="items">
                <button class="trash-icon">${item.done ? checked : check}</button>
                <p class="${item.done ? 'done-item' : 'undone-item' }">${item.title}</p>
                <button>${trash}</button>
            </li>`
        });
        tasksDOM.innerHTML = result
    }
}
