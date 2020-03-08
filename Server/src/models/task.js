const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema = new mongoose.Schema({
    src: {
        type: String,
        // required: true,
        trim: true
    },
    dest: {
        type: String,
        trim: true,
        //required: true
    },
    date: {
        type: String,
        //required: true,
    },
    time: {
        type: String,
        //required: true
    },
    AFB: {
        type: String,
        maxlength: 8,
        unique: true
    },
    ret: {
        type: Number,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
} , {
    timestamps: true
})

const tasks = mongoose.model('tasks', taskSchema)

module.exports = tasks