const express = require('express')
const spawn = require('child_process').spawn;
const cors = require('cors')
const bodyParser = require('body-parser')
const random = require('randomstring')

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post('/qrcode', (req,res) =>{


    const rn_number = random.generate({
        length: 8,
        charset: 'alphanumeric'
      })
    var a = req.body.a
    var b = req.body.b
    var e = rn_number
    var f = req.body.f

    
    const process = spawn('python', ['./qrcode.py',a,b,e,f]);

    process.stdout.on('data', function(data) {

       res.send(data.toString());
        
    })
    
    })

app.listen(4000, ()=>{
    console.log('Server is running!')
})
