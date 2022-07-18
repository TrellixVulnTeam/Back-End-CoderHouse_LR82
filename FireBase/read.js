import query from './db.js'
import parseUsers from './utils/parseUsers.js'

const id = 'FO7WjfrKom8CzQ1mfQFL'
const doc = query.doc(id)

try {
    const response = await doc.get()
    const user = parseUsers(response)

    console.log(user)
} catch (error) {
    console.log(`Error: ${error.message}`)
}