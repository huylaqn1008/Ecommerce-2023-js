import express from 'express'
import { loginController, registerController } from '../controllers/authController.js'

//Route object
const router = express.Router()

//Routing
//REGISTER || METHOD POST
router.post('/register', registerController)

//LOGIN || METHOD POST
router.post('/login', loginController)

export default router