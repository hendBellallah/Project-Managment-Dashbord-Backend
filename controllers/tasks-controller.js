const taskModel = require('../models/tasks-model')


module.exports = {
    get : (req,res) => {
        taskModel.selectAll((result)=>{res.json(result)})
    },
    getById : (req,res)=>{
        taskModel.selectById(req.params.id, result =>{res.json(result)})
    },
    post : (req,res) => {
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        taskModel.insert(req.body, message =>{res.json({success : true, message})})
    },
    put : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        taskModel.update(req.params.id,req.body, result =>{res.json({success : true, result})})
    },
    delete : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        taskModel.delete(req.params.id, result =>{res.json({success : true, result})})
    }
}

