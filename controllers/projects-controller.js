const projectModel = require('../models/projects-model')


module.exports = {
    get : (req,res) => {
        projectModel.selectAll((result)=>{res.json(result)})
    },
    getById : (req,res)=>{
        projectModel.selectById(req.params.id, result =>{res.json(result)})
    },
    post : (req,res) => {
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        projectModel.insert(req.body, message =>{res.json({success : true, message})})
    },
    put : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        projectModel.update(req.params.id,req.body, result =>{res.json({success : true, result})})
    },
    delete : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        projectModel.delete(req.params.id, result =>{res.json({success : true, result})})
    }
}

