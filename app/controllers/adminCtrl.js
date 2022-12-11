const Question = require('../models/questionModel')
const adminKey = process.env.SECRET_KEY

module.exports.adminLogin = (req,res)=>{
    const {key}=req.body
    if(key===adminKey)
    {
       res.send('loggedIn')
    }
    else
    {
        res.json({errors:{message:"invalid key"}})
    }
}