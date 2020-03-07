const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const auth = require('../middleware/auth')
const multer = require('multer')
const sharp = require('sharp')
const random = require('randomstring')
const { sendSmsVerification } = require('../emails/test-sms')
const { sendWelcomeEmail, sendCancelationEmail } = require('../emails/account')

router.post('/users' , async (req,res)=>{

    const rn_number = random.generate({
      length: 8,
      charset: 'alphanumeric'
    })
    const pass = { password: rn_number }
    const newObj = Object.assign(req.body)
    const user = new User(newObj)

    try {
        const token = await user.generateAuthToken()
      await user.save()
      sendSmsVerification(req.body.name, req.body.phone_no, rn_number)
      //sendWelcomeEmail(user.email, user.name)
      res.status(201).send({user, token})
    } catch (e) {
      res.status(400).send(e)
    }
  })
  
router.post('/users/login' , async (req, res)=>{
    try {      
        const user = await User.findByCredentials(req.body.phone_no, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch(e) {
        res.status(400).send(e)
    }
})

router.post('/users/logout',async (req, res)=>{
    try {
        req.user.tokens = req.user.tokens.filter((token)=>{
          return token.token !== req.token
        })

        await req.user.save()

        res.send()
    } catch (e) {
      res.status(500).send()
    }
})

router.post('/users/logoutAll', async (req, res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
    }catch(e){
      res.status(500).send()
    }
})

  router.get('/users/me', async (req, res)=>{
    res.send(req.user)
  })
  
  // router.get('/users/:id', async (req, res)=>{
  //   const _id = req.params.id
  
  //   try {
  //     const user = await User.findById(_id)
  //     if (!user) {
  //       return res.status(404).send
  //     }
  //     res.send(user)
  //   } catch(e) {
  //     res.status(500).send(e)
  //   }
  // })
  
  router.patch('/users/me', async (req, res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name' , 'email', 'password', 'age', 'gender', 'fam', 'aadhar_no', 'dob', 'house', 'village', 'gram', 'district', 'state', 'occupation', 'reg']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  
  
    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid Updates'})
    }
  
    try {
        // const user = await User.findById(req.params.id)

        updates.forEach((update) =>  req.user[update] = req.body[update])

        await req.user.save()
        //const user = await User.findByIdAndUpdate(req.params.id , req.body , { new: true , runValidators: true })
  
        res.send(req.user)
  
    } catch (e) {
      res.status(400).send(e)
    }
  })
  
  router.delete('/users/me', async (req,res)=>{
    try{
      //const user = await User.findByIdAndDelete(req.user._id)
      
     await req.user.remove()
     //sendCancelationEmail(req.user.email, req.user.name)
      res.send(req.user)
    }catch(e){
      res.status(500).send(e)
    }
  })

  var storage = multer.diskStorage({
    destination: function(res, file, cb) {
      cb(null, 'uploads')
    },
    filename: function(res, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })

  const csvFile = multer({
    storage: {
      storage
    }
  })


module.exports = router