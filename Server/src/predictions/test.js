const express = require('express')
const spawn = require('child_process').spawn;
const cors = require('cors')
const bodyParser = require('body-parser')
const random = require('randomstring')

const rn_number = random.generate({
    length: 8,
    charset: 'alphanumeric'
})
const app = express()
var final = ''
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post('/qrcode', (req,res) =>{
    
    var a = req.body.a
    var b = req.body.b
    var e = rn_number
    var f = req.body.f

    const process = spawn('python', ['./qrcode.py',a,b,e,f]);
    console.log(a)
    process.stdout.on('data', function(data) {

         final = data.toString().split(",")
         res.status(201).send(final)
    })
       

    //    res.send(data.toString());
    })

app.listen(5000, ()=>{
    console.log('Server is running!')
})

module.exports = final