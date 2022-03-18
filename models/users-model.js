var mysql = require('mysql');


module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM users';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        console.log('user-model',id)
        let sql = 'SELECT id,pwd,role FROM users WHERE id = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    // selectByEmail : async (email,next)=>{
    //     let sql = 'SELECT * FROM users WHERE email = ?'
    //     db.query(sql,email,(err,result) => {
    //         if(err) throw err
    //         next(result[0])
    //     })
    // },
    insert : async (user,next)=>{
        let sql = 'INSERT INTO users SET ?'
        db.query(sql,user,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,{pwd,role},next)=>{
        let sql = `UPDATE users SET pwd=?, role=? WHERE id=?`

        db.query(sql,[pwd,role,id],(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM users WHERE id=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}