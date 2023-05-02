/**
 * Recive data from file
 */

const tasks_database_file_path = 'sample-tasks.json'

export class fetchFromFile{
    async getTasks() {
        try {
            const result = await fetch(tasks_database_file_path);
            const data = await result.json()
            return data.items
        } catch (error) {
            console.log(error)
        }
    }
}