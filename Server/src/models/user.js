const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const tasks = require('./task')

const userSchema = new mongoose.Schema({
    person_id: {
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
    phone_no: {
        type: Number,
        maxlength: 10,
        minlength: 10,
        unique: true,
    },
    station: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
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

userSchema.statics.findByCredentials = async (phone_no , password) =>{
    const user = await User.findOne({ phone_no })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}


userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)
    
    user.tokens = user.tokens.concat({ token })
    await user.save()    
    return token
}

//Hash the password
userSchema.pre('save' , async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)

    }

    next()
})

//Delete user tasks when user is removed

userSchema.pre('remove' , async function (next) {
    const user = this

    await tasks.deleteMany({ owner: user._id })
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User