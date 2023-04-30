/**
 * Recive data from file
 */

const tasks_database_file_path = 'sample-tasks.json'
console.log(tasks_database_file_path)

export class fetchFromFile{
    async getTasks() {
        try {
            const result = await fetch(tasks_database_file_path);
            const data = await result.json()
            let tasks = data.items
        } catch (error) {
            console.log(error)
        }
    }
}