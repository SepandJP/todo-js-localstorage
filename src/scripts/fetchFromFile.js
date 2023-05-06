/**
 * Recive data from file
 */

const tasks_database_file_path = 'sample-tasks.json'

export class fetchFromFile{
    getTasksFromLocalStorage() {
        const task_json = localStorage.getItem('tasks');
        try {
            return task_json !== null ? JSON.parse(task_json) : [];
        } catch (error) {
            return [];
        }
    }
}