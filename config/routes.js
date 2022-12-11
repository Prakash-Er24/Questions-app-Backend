const express = require('express')
const router = express.Router()
const questionCtrl = require('../app/controllers/questionCtrl')
const studentCtrl = require('../app/controllers/studentCtrl')
const adminCtrl = require('../app/controllers/adminCtrl')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

router.post('/api/admin',adminCtrl.adminLogin) //admin login

router.put('/api/admin/:id', authorization,questionCtrl.update)
router.get('/api/questions', questionCtrl.getQuestions)
router.post('/api/questions', authentication,questionCtrl.createQuestion)
router.put('/api/question/:id', authentication,questionCtrl.updateLike)
 
router.post('/api/student/register', studentCtrl.createStudent)
router.post('/api/student/login', studentCtrl.login)
router.get('/api/students', authorization,studentCtrl.getStudents)
router.get('/api/student', authentication, studentCtrl.list)

module.exports = router 
