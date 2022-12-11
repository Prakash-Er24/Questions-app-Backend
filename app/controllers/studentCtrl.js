const bcrypt = require('bcryptjs')
const Student = require('../models/studentModel')
const jwt = require('jsonwebtoken')
const studentCtrl = {}

studentCtrl.createStudent = (req,res)=>{
    const {body} = req
    const student = new Student(body)
    student.save()
        .then((student)=>{
           res.json('success')
        })
        .catch((err)=>{
            if(err.hasOwnProperty('keyValue'))
            {
                res.json({notice:`${err.keyValue.email} already exists`})
            }
            else
            {
                res.json(err)
            }
        })
}

studentCtrl.login = (req,res) => {
    const { email, password } = req.body
    Student.findOne({email})
        .then((student)=>{
            if(student)
            bcrypt.compare(password, student.password)
                .then((match)=>{
                   if(match){
                    const obj = {id:student._id,email:student.email}
                    const token = jwt.sign(obj,process.env.JWT_KEY ,{expiresIn:'1d'})
                    res.json({token:`Bearer ${token}`})
                   }
                   else{
                    res.json({notice:'Invalid email or password'})
                   }
                })
            else{
                res.json({notice:'Invalid email or password'})
            }
        })
}

studentCtrl.getStudents = (req,res)=>{
    Student.find()
        .then((student)=>{
            res.json(student)
        })
        .catch((err)=>{
            res.json(err)
        })
}

studentCtrl.list = (req,res) => {
    const { tokenData } = req
    Student.findOne({_id:tokenData.id})
    .then((student)=>{
        res.json(student)
    })
    .catch((err)=>{
        res.json(err)
    })

}
module.exports = studentCtrl