const express = require("express");
require("dotenv").config();
const db = require("./database/db.js");
const app = express();
const expressSession = require("express-session");
const pgSession = require("connect-pg-simple")(expressSession);
//controllers
const userControllers = require("./controllers/users.js");
const userControllers = require("./controllers/memories.js");
const sessionController = require("./controllers/session");

// const db = require("./database/db.js");
const port = process.env.PORT || 3001 // using different port than normal one 


app.use(express.static('./client/build'))
app.use(express.json());

app.get('/api/test', (req, res) => {   
        res.json({results:"success"})
  })


// start the web server
app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
  });
