/**
 * Recive data from file
 */

const tasks_database_file_path = 'sample-tasks.json'

export class fetchFromFile{
    /*
    async getTasks() {
        try {
            const result = await fetch(tasks_database_file_path);
            const data = await result.json()
            return data.items
        } catch (error) {
            console.log(error)
        }
    }
    */

    getTasksFromLocalStorage() {
        const task_json = localStorage.getItem('tasks');
        try {
            return task_json !== null ? JSON.parse(task_json) : [];
        } catch (error) {
            return [];
        }
    }
}