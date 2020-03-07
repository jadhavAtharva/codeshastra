const express = require('express')
const spawn = require('child_process').spawn;
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.post('/qrcode', (req,res) =>{
    
    var a = req.body.a
    var b = req.body.b
    var c = req.body.c
    var d = req.body.d
    var e = req.body.e
    var f = req.body.f

    const process = spawn('python', ['./qrcode.py',a,b,c,d,e,f]);

    process.stdout.on('data', function(data) {

       res.send(data.toString());
        
    })
    
    })

app.listen(5000, ()=>{
    console.log('Server is running!')
})
