import {createDOM} from './createDOM.js'
import {fetchFromFile} from './fetchFromFile.js'
import {insertToFile} from './insertToFile.js' 

let tasksList = []

document.addEventListener('DOMContentLoaded', () => {
    const view = new createDOM
    const task = new fetchFromFile
    const storage = new insertToFile

    task.getTasks().then((data) => view.displayTasks(data))
})