import express, { Request, Response } from "express"
import User from "../models/user"
import jwt from "jsonwebtoken"
import {check, validationResult}from "express-validator"
const router  = express.Router()

router.post("/register",[
    check("firstName","First name is require").isString(),
    check("lastName","Last name is require").isString(),
    check("email","Email  is require").isEmail(),
    check("password","password is 6 or more charecters require is require").isLength({
        min:6
    })
],async(req:Request, res:Response)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({message:errors.array()})
    }
    try {
        const user = await User.findOne({
            email:req.body.email,
        })
        if(user){
            return res.status(400).json({message: "User already exist"})
        }
        const _user = new User(req.body)
        await _user.save()
        const token = jwt.sign({userId:_user.id},process.env.JWT_SECRET_KEY as string,
           { expiresIn:"1d"}
        )
        res.cookie("auth_token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            maxAge:86400000,
        })
        return res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"Something went wrong"})
    }
})

export default router