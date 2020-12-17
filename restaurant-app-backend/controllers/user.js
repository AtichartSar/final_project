const db = require('../models/index')
const bcrypt = require('bcryptjs')
const jwt  =require('jsonwebtoken')

const loginUser = async (req,res)=>{
    const {username, password} = req.body;
    const targetUser = await db.User.findOne({where:{username:username}})
    if(!targetUser){
        res.status(400).send({message:'username or password is wrong'})
    }else{
        const isCorrectPassword =bcrypt.compareSync(password,targetUser.password)

        if(isCorrectPassword){
            const  payload = {
                name:targetUser.username,
                email:targetUser.name,
                id:targetUser.id
            }
            console.log("payload",payload)
            const key = process.env.SECRET_OR_KEY
            const token = jwt.sign(payload,key,{expiresIn:3600})
            res.status(200).send({
                token:token,
                message:'login successful'
            })
        } else{
            res.status(400).send({message:'username or password is wrong'})
        }
    }
}

const register = async (req, res) => {
    const { username, password, email } = req.body
    const targetUser = await db.User.findOne({where:{username:username}})
    if(targetUser){
        res.status(400).send({message:'username alerady taken'})
    }else{
        const salt = bcrypt.genSaltSync(12)
        const hashPassword = bcrypt.hashSync(password, salt)

        await db.User.create({
            username:username,
            password:hashPassword,
            name:email
        })
        res.status(201).send({message:'user created'})
    }
}

module.exports={
    loginUser,
    register
}