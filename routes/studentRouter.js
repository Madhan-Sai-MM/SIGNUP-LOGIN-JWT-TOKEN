const { Router } = require('express')
const { getStudents,getStudentsByID,postStudents,updateStudentsById,deleteStudentsByID } = require('../controllers/studentController')
const { authMiddleware, isAdminMiddleware } = require('../middlewares/authMiddleware')
const studentRouter = Router()

studentRouter.use(authMiddleware)

//Moview routes
studentRouter.get('/', getStudents)
studentRouter.get('/:studentID', getStudentsByID)

//Route level Middleware
studentRouter.post('/', isAdminMiddleware, postStudents)
studentRouter.put('/:studentID', isAdminMiddleware, updateStudentsById)
studentRouter.delete('/:studentID', isAdminMiddleware, deleteStudentsByID)

module.exports = studentRouter