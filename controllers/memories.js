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
  const userId = req.params.userId
  console.log(userId, "userId")
  const sql = "SELECT * FROM memories_data where userid=$1";
  db.query(sql, [userId]).then((dbResult) => {
    res.json(dbResult.rows);
  });
});

router.post("/", (req, res) => {
  console.log(req.body, "req.body")
  const {
    userid,
    memory_date,
    memory_description,
    memory_file,
    title
  } = req.body

  // 
  const sql = `INSERT INTO memories_data (userid,title,memory_file,memory_description,memory_date) VALUES ($1,$2,$3,$4,$5);`;
  db.query(sql, [userid, title, memory_file, memory_description, memory_date])
    .then((dbRes) => {
      res.json({
        success: true
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: error
      });
    });

})
router.delete("/:id", (req, res) => {
  console.log("in here ")
  const id = req.params.id 
  const sql = `DELETE from memories_data where (id)=($1)`
  db.query(sql,[id]).then((dbResult) =>{
    res.json({
      success: true
    });
  })
  .catch((error)=>{
    res.status.json({message : error})
  })
  // router.delete("/:id", (req, res) => {
  //   const plantId = req.params.id;
  //   const sql = `DELETE FROM greenhouse WHERE (id) = ($1)`;
  
  //   db.query(sql, [plantId]).then((dbRes) => {
  //     res.json({ success: true });
  //   });
  // });
  
})




module.exports = router;