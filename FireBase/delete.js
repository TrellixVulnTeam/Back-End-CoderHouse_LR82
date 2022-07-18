import query from "./db.js";

const id = 'FO7WjfrKom8CzQ1mfQFL'
const doc = query.doc(id)

try {
    const user = await doc.delete()
    console.log(user)
} catch (error) {
    console.log(`Error: ${error.message}`)
}