const userModel = require('../models/users-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = {
    get : (req,res) => {
        userModel.selectAll((result)=>{res.json({success : true, result})})
    },
    //Helper
    getById : (req,res)=>{
        userModel.selectById(req.params.id, result =>{res.json(result)})
    },
    //Resiter
    post : (req,res) => {
        const newUser = req.body
        if(!newUser.cin || !newUser.pwd || !newUser.role) 
            return res.satus(400).json({success : false, message : "Please enter all data"})

        userModel.selectByCin(newUser.cin, user => {
            if(user)
                return res.status(400).json({success : false, message : "CIN already exist"})

            bcrypt.genSalt(10, (err, salt)=>{
                if(err) throw err
                bcrypt.hash(newUser.pwd, salt, (err, hash)=>{
                    if (err) throw err
                    newUser.pwd = hash
                    userModel.insert(newUser, message =>{
                        jwt.sign(
                            {cin : message.insertCin},
                            config.get("jwtSecret"),
                            { expiresIn: config.get("tokenExpire") },
                            (err, token)=>{
                                if(err) throw err
                                res.json({
                                    success : true,
                                    token,
                                    user : {
                                        cin: message.insertCin,
                                        pwd: newUser.pwd,
                                        role: newUser.role,
                                    }
                                })
                            }
                        )
                    })
                })
            })
        })
    },
    put : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        userModel.update(req.params.id,req.body, result =>{res.json({success : true , result})})
    },
    delete : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        userModel.delete(req.params.id, result =>{res.json({success : true , result})})
    }
}