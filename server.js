const express = require("express");

const app = express();
// const db = require("./database/db.js");
const port = process.env.PORT || 3001 // using different port than normal one 

app.use(express.json());

app.get('/api/test', (req, res) => {   
        res.json({results:"success"})
  })

// start the web server
app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
  });
