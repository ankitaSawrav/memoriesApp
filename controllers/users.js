const express = require("express")
const session = require("express-session")
const db = require("../database/db.js")
const router = express.Router()
const bcrypt = require("bcrypt")


  router.get("/", (req, res) => {
   
    const sql = "SELECT * FROM users";
    db.query(sql).then((dbResult) => {
      res.json(dbResult.rows);
    });
  });

  router.post("/",(req,res)=>{
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password
    console.log(req.body,"req")

    function generateHash(pass) {
        return bcrypt.hashSync(pass, bcrypt.genSaltSync(10), null);
      }
      let passwordHash = generateHash(password);
      
      if (username === undefined || username === "") {
        res.status(400).json({ success: false, message: "name is required" });
      } else if (email === undefined || email === "") {
        res.status(400).json({ success: false, message: "email is required" });
      } else if (email.length < 7) {
        res.status(400).json({ success: false, message: "email is too short" });
      } else if (password === undefined || password === "") {
        res.status(400).json({ success: false, message: "password is required" });
      } else if (password.length < 6) {s
        res.status(400).json({ success: false, message: "password is too short" });
      } else {
        const sql = `INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)`;
    
        db.query(sql, [username, email, passwordHash])
          .then((dbRes) => {
            console.log(dbRes,"dbRes")
            res.json({ success: true });
          })
          .catch((reason) => {
            res.status(500).json({ message: reason });
          });
      }
  })

  module.exports = router;