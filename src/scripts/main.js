import {createDOM} from './createDOM.js'
import {fetchFromFile} from './fetchFromFile.js'
import {insertToFile} from './insertToFile.js' 

let tasksList = []

document.addEventListener('DOMContentLoaded', () => {
    const Storage = new createDOM
    const task = new fetchFromFile
    const view = new insertToFile

    task.getTasks().then((data) => console.log(data))
})