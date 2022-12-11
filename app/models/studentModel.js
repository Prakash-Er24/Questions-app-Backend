const mongoose = require('mongoose')
const validator  = require('validator')
const bcrypt = require('bcryptjs')
const { isEmail } = validator
const {Schema} = mongoose
const studentSchema = new Schema({
   
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value){
                return isEmail(value)
            },
            message:function(){
                return 'Invalid email format'
            }
        }
    }, username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlenght:8,
        maxlength:128
    }

},{timestamps:true})

studentSchema.pre('save',function(next){
    bcrypt.genSalt()
        .then((salt)=>{
            bcrypt.hash(this.password,salt)
                .then((encrypted)=>{
                    this.password = encrypted
                    next()
                })
        })
})
const Student = mongoose.model('Student',studentSchema)

module.exports = Student