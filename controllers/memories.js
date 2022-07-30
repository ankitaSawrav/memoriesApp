const express = require("express");
const router = express.Router();
const db = require("../database/db");


router.get("/", (req, res) => {
    const sql = "SELECT * FROM memories_data";
    db.query(sql).then((dbResult) => {
      res.json(dbResult.rows);
    });
});

router.get("/:userId", (req, res) => {
    const userId =  req.params.userId
    console.log(userId,"userId")
    const sql = "SELECT * FROM memories_data where userid=$1";
    db.query(sql,[userId]).then((dbResult) => {
      res.json(dbResult.rows);
    });
});

router.post("/",(req,res) => {
  console.log(req.body,"req.body")
  const{userid,memory_date,memory_description,memory_file,title} = req.body
  
  // 
  const sql = `INSERT INTO memories_data (userid,title,memory_file,memory_description,memory_date) VALUES ($1,$2,$3,$4,$5);`;
  db.query(sql, [userid,title,memory_file,memory_description,memory_date])
  .then((dbRes) => {
    res.json({ success: true });
  })
  .catch((reason) => {
    res.status(500).json({ message: reason });
  });

})




module.exports = router;