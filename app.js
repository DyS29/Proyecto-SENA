const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({ extended: true }))
const cors = require("cors")
app.use(cors())

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

app.get('/login', async (req, res) => {
  console.log(req.body)
  try {
    const [results, fields] = await connection.query(
      "SELECT * FROM `usuarios` WHERE `n_celular` = ? AND `contraseña` = ?;"
      , [req.query.celular, req.query.clave]
    );
    if (results.length > 0) {
      res.status(200).send("inicio correctamente")
    } else {
      res.status(401).send("Datos incorrecto")

    }
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
    res.status(500).send("hubo un error  en registro")
  }
})

app.get("/registro", async function name(req, res) {
  try {
    const [results, fields] = await connection.query(
      "INSERT INTO `usuarios` (`id`, `n_celular`, `contraseña`) VALUES (NULL, ? , ? );"
      , [req.query.celular, req.query.contraseña]
    );
    console.log(results)
    if (results.affectedRows > 0) {
      res.status(201).send("Registro de los datos correctamente")
    } else {
      res.status(400).send("No se pudo registrar")

    }
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
  catch (err) {
    console.log(err);
    res.status(500).send("hubo un error  en registro")
  }
})
