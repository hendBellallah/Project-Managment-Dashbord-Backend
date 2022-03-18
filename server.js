const express = require('express')

const app = express();
app.use(express.json())

const auth = require('./routes/api/auth-api')
const listes = require('./routes/api/listes-api')
const projects = require('./routes/api/projects-api')
const tasks = require('./routes/api/tasks-api')
const users = require('./routes/api/users-api')

app.use('/api/auth',auth)
app.use('/api/listes',listes)
app.use('/api/projects',projects)
app.use('/api/tasks',tasks)
app.use('/api/users',users)

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))