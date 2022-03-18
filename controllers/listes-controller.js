const listeModel = require('../models/listes-model')


module.exports = {
    get : (req,res) => {
        listeModel.selectAll((result)=>{res.json(result)})
    },
    getById : (req,res)=>{
        listeModel.selectById(req.params.id, result =>{res.json(result)})
    },
    post : (req,res) => {
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        listeModel.insert(req.body, message =>{res.json({success : true, message})})
    },
    put : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        listeModel.update(req.params.id,req.body, result =>{res.json({success : true, result})})
    },
    delete : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        listeModel.delete(req.params.id, result =>{res.json({success : true, result})})
    }
}

