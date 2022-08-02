const express = require("express");
require("dotenv").config();
const pg = require("pg");
const db = require("../memoriesapp/database/db.js");
const app = express();
const expressSession = require("express-session");
const pgSession = require("connect-pg-simple")(expressSession);




//controllers
const userControllers = require("./controllers/users.js");
const memoriesController = require("./controllers/memories.js");
const sessionController = require("./controllers/session.js");


const port = process.env.PORT || 3001 // using different port than normal one 


app.use(express.static('./client/build'))
app.use(express.json({limit: '20mb'}));

//code for create session
app.use(
  expressSession({
    store: new pgSession({
      pool: db,
      createTableIfMissing: true,
    }),
    secret: process.env.EXPRESS_SESSION_SECRET_KEY,
  })
);

//middleware
app.use((req, res, next) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  next();
});

app.use("/api/users", userControllers);
app.use("/api/session",sessionController)
app.use("/api/memories",memoriesController)


app.get('/api/test', (req, res) => {   
        res.json({results:"success"})
  })

app.use((err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || "something went wrong";
  res.status(status).json({ message });
  next(err);
});

// start the web server
app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
  });
