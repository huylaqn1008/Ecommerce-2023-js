import userModel from "../models/userModel.js"
import { comparePassword, hashPassword } from './../helpers/authHelper.js';
import JWT from 'jsonwebtoken'

//POST REGISTER
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body

        //Validations
        if (!name) {
            return res.send({ error: 'Name is Required' })
        }
        if (!email) {
            return res.send({ error: 'Email is Required' })
        }
        if (!password) {
            return res.send({ error: 'Password is Required' })
        }
        if (!phone) {
            return res.send({ error: 'Phone is Required' })
        }
        if (!address) {
            return res.send({ error: 'Address is Required' })
        }

        //Check user
        const existingUser = await userModel.findOne({ email })
        //Already exist user
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'Already Resiter please login.'
            })
        }
        //Register user
        const hashedPassword = await hashPassword(password)
        //Save
        const user = await new userModel({ name, email, phone, address, password: hashedPassword }).save()

        res.status(201).send({
            success: true,
            message: 'User Register Successfully',
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Registeration',
            error
        })
    }
}

//POST LOGIN
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body

        //Validations
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'Invalid email or passowrd'
            })
        }

        //Check user
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registed'
            })
        }
        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Password'
            })
        }

        //Token
        const token = await JWT.sign(
            { _id: user._id },
            process.env.JWT_KEY,
            { expiresIn: "7d" }
        )
        res.status(200).send({
            success: true,
            message: 'Login successfully',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Login',
            error
        })
    }
}