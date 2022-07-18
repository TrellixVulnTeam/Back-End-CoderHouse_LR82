import query from './db.js'
import parseUsers from './utils/parseUsers.js'


try {
    // const response = await query.get() trae todo lo que esta en el objeto
    const response = await query.select('nombre').get()
    const docs = response.docs

  const users = docs.map(parseUsers)

    console.log(users)
} catch (e) {
    console.log(`Error: ${e.message}`)
}