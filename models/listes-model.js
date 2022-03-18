var mysql = require('mysql');
// var db = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'express_sql'
//   });

  
module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM listes';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        let sql = 'SELECT * FROM  listes WHERE id = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async ( liste,next)=>{
        let sql = 'INSERT INTO  listes SET ?'
        db.query(sql, liste,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id, liste,next)=>{
        let nomListe =  liste.nomListe ? `nomListe='${ liste.nomListe}'` : null;
        //let body =  liste.body ? `body='${ liste.body}'` : null;

        let data = nomListe 
        

        let sql = `UPDATE  listes SET ${data} WHERE id=${id}`

        db.query(sql,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM  listes WHERE id=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}