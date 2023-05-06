import {createDOM} from './createDOM.js'
import {fetchFromFile} from './fetchFromFile.js'
import {insertToFile} from './insertToFile.js' 

document.addEventListener('DOMContentLoaded', () => {
    const task = new fetchFromFile
    const storage = new insertToFile(task)
    const view = new createDOM(storage, task)

    let tasks_list = task.getTasksFromLocalStorage()

    view.displayTasks(tasks_list)

    document.querySelector('#add-task-form').addEventListener('submit', e => {
        e.preventDefault()
        tasks_list.push({
            id: crypto.randomUUID(),
            title: e.target.newTaskTitle.value,
            done: false
        });
        storage.saveTasksToLocalStorage(tasks_list)
        view.displayTasks(tasks_list)
        e.target.elements.newTaskTitle.value = ''
    })

    window.addEventListener('storage', e => {
        if (e.key === 'tasks') {
            tasks_list = JSON.parse(e.newValue);
            view.displayTasks(tasks_list)
        }
    });

})