const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const tasks = require('./task')

const userSchema = new mongoose.Schema({
    unique_id: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        validate(value) {
            if(value.toLowerCase().includes('password')){
                throw new Error('password must not contain word password')
            }
        }
    },
    name: {
        type: String,
        required: true
    },
    phone_no: {
        type: Number,
        maxlength: 10,
        minlength: 10,
        unique: true,
    },
}, {
    timestamps: true
})

userSchema.virtual('tasks', {
    ref: 'tasks',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    
    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

userSchema.statics.findByCredentials = async (unique_id , password) =>{
    const user = await User.findOne({ unique_id })

    if (!user) {
        throw new Error('Unable to login')
    }

    if(!(password == user.password)) {
        throw new Error('Unable to login')
    }

    return user
}

const User = mongoose.model('User', userSchema)

module.exports = User