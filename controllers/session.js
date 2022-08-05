const express = require("express")
const session = require("express-session")
const db = require("../database/db.js")
const router = express.Router()
const bcrypt = require("bcrypt")


function isValidPassword(plainTextPassword, passwordHash) {
    // Returns true or false if the passwords match
    return bcrypt.compareSync(plainTextPassword, passwordHash)
}

router.get("/", (req, res) => {
    if (!req.session.userId) {
      res.status(401).json({ message: "Not Logged in" });
    } else {
      res.json({
        id: req.session.userId,
        name: req.session.name,
        email: req.session.email,
      });
    }
});
router.post('/',(req,res)=>{
  const email =  req.body.useremail
  const password = req.body.password
  
  console.log(email,"email",password,"password")
  const sql = `SELECT * FROM users WHERE email = $1`;
  console.log("sql ",sql)
  db.query(sql, [email]).then((dbResult) => {
    console.log("sql ",sql)
    console.log(dbResult,"result")
    const user = dbResult.rows[0];
    // console.log(user,"user")

    if (user && password===user.password_hash) {
      console.log("match")
      req.session.userId = user.id;
      req.session.name = user.username;
      req.session.email = user.email;
      return res.json({ message: "Logged in successfully" });
      
    }
    else{
    // console.log("hele")
    
    res.status(400).json({ message: "Invalid email or password" });
  }
  })

  // res.json({ success: true });
})

router.delete("/", (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "logged out successfully" });
  });
});

module.exports = router