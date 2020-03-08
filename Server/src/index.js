const express = require('express')
require('./db/mongoose')

const cors = require('cors')
const bodyParser = require('body-parser')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) =>{
//         res.send('Site Under maintainence try again soon.')
// })
app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port , ()=>{
    console.log('Server is up on port ' + port)
})

