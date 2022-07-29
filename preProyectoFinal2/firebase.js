const admin = require('firebase-admin')
const readFile = require('fs/promises')

const serviceAccount = './firebasekey.json'


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://project-8316814463810087226.firebaseio.com'
})

const db = admin.firestore()
const query = db.collection('productos')

module.exports = query