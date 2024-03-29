var mysql = require('mysql');
// var db = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'express_sql'
//   });

  
module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM projects';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        let sql = 'SELECT * FROM projects WHERE id = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (project,next)=>{
        let sql = 'INSERT INTO projects SET ?'
        db.query(sql,project,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,project,next)=>{
        let nomProjet = project.nomProjet ? `nomProjet='${project.nomProjet}'` : null;
        let cle = project.cle ? `cle='${project.cle}'` : null;
        let chefProjet = project.chefProjet ? `title='${project.chefProjet}'` : null;

        let data = nomProjet && cle && chefProjet 

         let sql = `UPDATE projects SET ${data} WHERE id=${id}`

        db.query(sql,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM projects WHERE id=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}