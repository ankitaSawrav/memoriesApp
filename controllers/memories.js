const express = require("express");
const router = express.Router();
const db = require("../database/db");
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: 'dmbyqfa3f',
    api_key: '735721518761484',
    api_secret: 'vk-fXmulxir_ZiMQUSNR5mr0oEw'
})



// router.get("/", (req, res) => {
//   const sql = "SELECT * FROM memories_data";
//   db.query(sql).then((dbResult) => {
//     res.json(dbResult.rows);
//   });
// });

router.get("/:userId", (req, res) => {
  const userId = req.params.userId
  console.log(userId, "userId")
  const sql = "SELECT * FROM memories_data where userid=$1";
  db.query(sql, [userId]).then((dbResult) => {
    res.json(dbResult.rows);
  });
});

router.post("/",async (req, res) => {
  try {
    console.log(req.body, "req.body")
    const {
      userid,
      memory_date,
      memory_description,
      memory_file,
      title
    } = req.body
    console.log(memory_file[0],"memory images in be")
    const response = await cloudinary.uploader.upload(memory_file[0],{folder: userid})
    console.log(response)
    
    const cloudinary_secure_url = response.secure_url
    const cloudinary_public_id = response.public_id



    const sql = `INSERT INTO memories_data (userid,title,cloudinary_public_id,cloudinary_secure_url,memory_description,memory_date) VALUES ($1,$2,$3,$4,$5,$6);`;
    db.query(sql, [userid, title,cloudinary_public_id ,cloudinary_secure_url, memory_description, memory_date])
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


  } catch (error) {
   console.log(error.message)
  }

})

//
router.put('/:memoryid',(req,res)=>{
  let memoryId = req.params.memoryid
  value = true
  console.log(memoryId,"in put")
  const sql = `UPDATE memories_data SET favourite=$1 where id=$2`
  db.query(sql,[value,memoryId]).then((dbRes)=>{
    console.log(dbRes, "line76 memories fav value")
    res.json({
      success: true
    });
  })

})
router.delete("/:id",async (req, res) => {
  try {
    
    console.log("in here ")
    const id = req.params.id 
    
    // step 1: get public id from database
    const sqlSelect = "SELECT cloudinary_public_id FROM memories_data where id=$1";
    let cloudinary_public_id_fromDB=""
    await db.query(sqlSelect, [id]).then((dbResult) => {
      cloudinary_public_id_fromDB=dbResult.rows[0].cloudinary_public_id
      console.log(dbResult.rows[0].cloudinary_public_id)
      // res.json(dbResult.rows[0].cloudinary_public_id);
    });
    console.log(cloudinary_public_id_fromDB,"cloudinary_public_id_fromDB")
    const response = await cloudinary.uploader.destroy(cloudinary_public_id_fromDB, (error,result) => {
                    console.log(result, error) });
    
    const sql = `DELETE from memories_data where (id)=($1)`
    db.query(sql,[id]).then((dbResult) =>{
      res.json({
        success: true
      });
    })
    
  } catch (error) {
    console.log(error.message)
  }
  
})




module.exports = router;