/**
 * Management of storage data
 */

export class insertToFile{
    constructor(fetch) {
        this.fetch = fetch
    }

    saveTasksToLocalStorage(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    toggleTasks(id) {
        let tasks = this.fetch.getTasksFromLocalStorage()
        let task = tasks.find(item => {
            return item.id === id
        })
        if ( task !== undefined ) {
            task.done = !task.done
        }
        this.saveTasksToLocalStorage(tasks)
        
    }
}
