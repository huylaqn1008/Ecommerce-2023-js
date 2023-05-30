import userModel from "../models/userModel.js"
import { hashPassword } from './../helpers/authHelper.js';

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