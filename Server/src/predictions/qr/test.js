const express = require('express')
const spawn = require('child_process').spawn;
const cors = require('cors')
const bodyParser = require('body-parser')
const random = require('randomstring')


const app = express()
var final = ''
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post('/qrcode', async(req,res) =>{


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

         final = data.toString().split(",")
         res.status(201).send(final)
    })
       

    //    res.send(data.toString());
    })


// app.post('/ticket', async(req,res) => {
//     const tas = new dome({
//         AFB: final[0],
//         date: final[1],
//         src: final[2],
//         dest: final[3],
//         ret: final[4],
//         time: final[5],    
//       })
//       try {
//         await tas.save()
//         res.status(201).send(tas)
//       } catch(e) {
//         res.status(400).send(e)
//       }
// })

app.listen(5000, ()=>{
    console.log('Server is running!')
})

module.exports = final