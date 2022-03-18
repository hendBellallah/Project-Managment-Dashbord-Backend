var mysql = require('mysql');
// var db = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'express_sql'
//   });

  
module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM tasks';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        let sql = 'SELECT * FROM tasks WHERE id = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (task,next)=>{
        let sql = 'INSERT INTO tasks SET ?'
        db.query(sql,task,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,task,next)=>{
        let nomTache = task.nomTache ? `nomTache='${task.nomTache}'` : null;
        let deadline = task.deadline ? `deadline='${task.deadline}'` : null;
        let description = task.description ? `description='${task.description}'` : null;
        let etiquette = task.etiquette ? `etiquette='${task.etiquette}'` : null;

        let data = nomTache && deadline && description && etiquette
        let sql = `UPDATE tasks SET ${data} WHERE id=${id}`

        db.query(sql,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM tasks WHERE id=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}