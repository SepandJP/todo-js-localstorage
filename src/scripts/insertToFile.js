/**
 * Management of storage data
 */

export class insertToFile{
    saveTasksToLocalStorage(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
}
