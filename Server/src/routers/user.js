const express = require('express')
const User = require('../models/user')
const tasks = require('../models/task')
const router = new express.Router()
const routers = new express.Router()
const sharp = require('sharp')
const random = require('randomstring')
const { check_day, check_station, check_validity,station_code } = require('../../../Decoder/functions')

router.post('/users' , async (req,res)=>{
    const newObj = Object.assign(req.body)
    const user = new User(newObj)

    try {
      await user.save()
      //sendWelcomeEmail(user.email, user.name)
      res.status(201).send({user})
    } catch (e) {
      res.status(400).send(e)
    }
  })

  router.post('/data', async (req, res) => {
     console.log(req.body)
     var key = Object.keys(req.body)
    var temp = String(key)
    // console.log(String(key), typeof(key))
    var final = temp.split(",")
    console.log(final[0])
    try{
      const task = await tasks.findOne({ "AFB": final[0] })
      console.log(task)
      if(task == null){
        res.send("InValid ticket!")
      }
      else{
        var val = check_validity(final[5], final[2])
        var stat = check_station(final[2], final[3])
        var reday = check_day(final[1], final[4]) 
        console.log(val,stat,reday)
        if(val == 1 && stat == 1 && reday ==1){
          res.send("Valid Ticket")
          res.status(201).send()
        }
        else{
          res.send("Invalid Ticket")
          res.status(201).send()
        }
      }
    }catch(e){
       res.status(400).send(e)
    }
   
    
 })
  
router.post('/data', async (req, res) => {
   console.log(req.body)
   res.status(201).send()
})

router.post('/users/login' , async (req, res)=>{
    try {      
        const user = await User.findByCredentials(req.body.unique_id, req.body.password)
        res.send({user})
    } catch(e) {
        res.status(400).send(e)
    }
})

  router.get('/users/me', async (req, res)=>{
    res.send(req.user)
  })

module.exports = router