var mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt= require('bcryptjs');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vidmeet'
})









exports.register = (req,res) =>{
    console.log(req.body);

    const {name, email, password,confirmpassword}= req.body
db.query('SELECT email FROM registeruser WHERE email= ?',[email],async(error, results)=>{
    if(error){
        console.log(error);
    }
    if(results.length>0){
        return res.render('register',{
            messege :' That email is aready in use'
        });
    }else if(password !== confirmpassword){
        return res.render('register',{
            messege :' password doesnot match'
        });
    }
    let hashedpassword = await bcrypt.hash(password,8);
    console.log(hashedpassword);
});

   

}