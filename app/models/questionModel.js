const mongoose = require('mongoose')
const {Schema} = mongoose

const questionSchema = new Schema({
    body:{
        type:String,
        required:true
    },
    isAnswered:{
        type:Boolean,
        required:true,
        default:false
    },
    likes : [{
        type:Schema.Types.ObjectId
    }],
    studentId:{
        type:Schema.Types.ObjectId,
        ref:'Student',
        required:true
    },
    answer:{
        type:String,
        default:''
    }
},{timestamps:true})

const Question = mongoose.model('Question',questionSchema)

module.exports = Question