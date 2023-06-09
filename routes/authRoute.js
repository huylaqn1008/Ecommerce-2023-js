import express from 'express'
import { loginController, registerController, testController } from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'

//Route object
const router = express.Router()

//Routing
//REGISTER || METHOD POST
router.post('/register', registerController)

//LOGIN || METHOD POST
router.post('/login', loginController)

//Test routes
router.get('/test', requireSignIn, isAdmin, testController)

//Protected route path
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
})

export default router