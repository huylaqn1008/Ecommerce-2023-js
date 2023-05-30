import express from 'express'
import { registerController } from '../controllers/authController.js'

//Route object
const router = express.Router()

//Routing
//REGISTER || METHOD POST
router.post('/register', registerController)

export default router