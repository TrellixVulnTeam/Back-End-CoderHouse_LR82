const { normalize, denormalize, schema} = require('normalizr')
const print = require('./utils/print')

const blog = require('./blog.json')

const userSchema = new schema.Entity('users')

const commentSchema = new schema.Entity('comments', {
    commenter: userSchema
})

const postSchema = new schema.Entity('posts', {
    author: userSchema,
    comments: [ commentSchema ]
})

const blogSchema = new schema.Entity('blog', {
    posts: [ postSchema ]
})

console.log('====== OBJETO ORIGINAL ======')
console.log(JSON.stringify(blog).length)
print(blog)

console.log('====== OBJETO NORMALIZADO ======')
const normalizeBlog = normalize(blog, blogSchema)
console.log(JSON.stringify(normalizeBlog).length)
print(normalizeBlog)

console.log('====== OBJETO DESNORMALIZADO ======')
const denormalizeBlog = denormalize(normalizeBlog.result, blogSchema, normalizeBlog.entities)
console.log(JSON.stringify(denormalizeBlog).length)
print(denormalizeBlog)