const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const sharp = require('sharp')
const random = require('randomstring')

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