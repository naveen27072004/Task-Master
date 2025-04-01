const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/EmployeesControllers')
const team = require('../middleware/AuthMiddle')

router.get('/allemployees',team,employeeController.GetAllUser)

module.exports = router