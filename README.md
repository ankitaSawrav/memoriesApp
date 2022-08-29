# Yaadein..

https://sheltered-reef-25477.herokuapp.com/

### Yaadein is a memory journal where you can capture your special moments forever. This is a single page react application.
 

## Features
- Add Add Memories
- Upload Images
- Delete Memories
- Add meomories to your favourite list
- Sign up and login 


Upload image to Cloudinary
```

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
```
________
## Technologies

- Express 
- React
- Cloudinary API
- Postgres
- Knex (promises)
- axios
- HTML
- CSS
- Material UI
- GIT 
- JavaScript

_______________
## Design Planning
 - Decided upon database structurea nad table structure 
 
___________
## DataBase Setup 
``` $ create db memories 
    $ psql memories 
    $ psql -d memories <db/schema.sql
    $ psql -d memories <db/seed.sql

```

# Instructions for Npm installation 
``` 
    $ npm install 
    $ npm start
    $ npm run start-dev

# Goals not reached and Complications :
Unfortunately there were a few goals that were not implemented,
- setting up favoutive as a collage which can be downloaded.
- shows no of days since the memory.
