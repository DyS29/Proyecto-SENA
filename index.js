const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({extended:true}))

const mysql = require('mysql2/promise');

// Create the connection to database
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'iglesia_pasion_de_multitudes',
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 

app.post('/',async (req, res) => {
  console.log(req.body)
  try {
    const [results, fields] = await connection.query(
      "SELECT * FROM `usuarios` WHERE `n_celular` = ? AND `contraseña` = ?;"
      ,[req.body.celular,req.body.contraseña]
    );
    if (results.length>0) {
       res.redirect("http://127.0.0.1:3001/principal.html")
    } else {
      res.redirect("http://127.0.0.1:3001/error.html")
      
    }
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }
})
 