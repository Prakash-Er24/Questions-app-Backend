 const Question = require('../models/questionModel')

module.exports.update = (req,res)=>{
    const {body}=req
    const {id}=req.params
    Question.findOneAndUpdate({_id:id},body,{new:true}).populate('studentId')
        .then((question)=>{
            res.json(question)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.createQuestion = (req,res)=>{
    const {body} = req
    const { id } = req.tokenData
    const question = new Question(body)
    question.studentId=id
    question.save()
        .then((question)=>{
           return Question.findOne({_id:question._id}).populate('studentId') 
        })
        .then((ques)=>{
            res.json(ques)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.getQuestions = (req,res)=>{
    Question.find().populate('studentId').sort({likes:-1})
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.updateLike = (req,res)=>{
    const {id:Sid} = req.tokenData
    const {id}=req.params
    
            Question.find({_id:id,likes:{$in : [Sid]}})
                    .then((response)=>{
                        if(response.length === 0)
                        { 
                            Question.findOneAndUpdate({_id:id}, {$push : {likes:Sid}},{new:true}).populate('studentId') 
                                .then((question)=>{
                                    res.json(question)
                                })
                                .catch((err)=>{
                                    res.json(err)
                                })
                        }
                        else 
                        {
                            Question.findOneAndUpdate({_id:id} ,{$pull : {likes:Sid}},{new:true}).populate('studentId')
                                .then((question)=>{
                                    res.json(question)
                                })
                                .catch((err)=>{
                                    res.json(err)
                                })
                        }       
                })
                .catch((err)=>{
                    res.json(err)
                })
        } 