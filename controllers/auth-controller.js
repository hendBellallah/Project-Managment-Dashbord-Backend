const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const config = require('config')
const usersModel = require("../models/users-model")

module.exports = {
    login : (req,res) => {
        let {cin,pwd} = req.body
        
        if (!cin || !pwd) 
            return res.status(400).json({success : false, message : "Please enter all data"})

        usersModel.selectByCin(cin, user => {
            if(!user) 
                return res.status(400).json({success : false, message : "User does not exist"})
            
            bcrypt.compare(pwd, user.pwd)
                .then(result => {
                    if(!result) 
                        return res.status(400).json({success : false, message : "Bad credantials"})

                    usersModel.selectByCin(user.cin, user =>{
                        jwt.sign(

                            {id : user.id},
                            config.get("jwtSecret"),
                            { expiresIn: config.get("tokenExpire") },

                            (err, token)=>{
                                if(err) throw err
                                res.json({
                                    success : true,
                                    token,
                                    user : {
                                        cin: user.cin,
                                        name: user.name,
                                        role: user.role,
                                    }
                                })
                            }
                        )
                    })
                })
        })
    },
    verifyToken : (req,res) => {
        console.log(req.userid)
    }
}