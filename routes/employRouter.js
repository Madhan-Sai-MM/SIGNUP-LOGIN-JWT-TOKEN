const { Router } = require('express')
const { getEmployes, getEmployesByID, postEmployes, updateEmployesById, deleteEmployesByID } = require('../controllers/employesController')
const { authMiddleware, isAdminMiddleware } = require('../middlewares/authMiddleware')
const employRouter = Router()

employRouter.use(authMiddleware)

//Moview routes
employRouter.get('/', getEmployes)
employRouter.get('/:employID', getEmployesByID)

//Route level Middleware
employRouter.post('/postEmployes', isAdminMiddleware, postEmployes)
employRouter.put('/:employID', isAdminMiddleware, updateEmployesById)
employRouter.delete('/:employID', isAdminMiddleware, deleteEmployesByID)

module.exports = employRouter