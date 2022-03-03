const express = require('express')

const app = express();
app.use(express.json())

const posts = require('./routes/api/posts-api')
const users = require('./routes/api/users-api')
const auth = require('./routes/api/auth-api')

app.use('/api/posts',posts)
app.use('/api/users',users)
app.use('/api/auth',auth)
app.use('/api/posts',posts)
app.use('/api/users',users)
app.use('/api/auth',auth)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))