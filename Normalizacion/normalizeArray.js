const normalizr = require('normalizr')
const fs = require('fs')

const blogposts = require('./blogposts.json')

const commentSchema = new normalizr.schema.Entity('comments')

const authorSchema = new normalizr.schema.Entity('author')

const postSchema = new normalizr.schema.Entity('posts', {
    author: authorSchema,
    comments: [ commentSchema ]
})

const postArray = new normalizr.schema.Array(postSchema)

const normalizeBlogposts = normalizr.normalize(blogposts, postArray)

fs.promises
.writeFile('./blogpostsNormalized.json', JSON.stringify(normalizeBlogposts, null, 2))