const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const mysql = require('mysql2/promise');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Conexión a la base de datos
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Asegúrate de añadir tu contraseña si es necesario
  database: 'iglesia_pasion_de_multitudes',
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Endpoint de login
app.post('/login', async (req, res) => {
  const { celular, clave } = req.body;
  try {
    const [results] = await connection.query(
      "SELECT * FROM `usuarios` WHERE `n_celular` = ? AND `contraseña` = ?;",
      [celular, clave]
    );
    if (results.length > 0) {
      res.status(200).send("Inicio correctamente");
    } else {
      res.status(401).send("Datos incorrectos");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Hubo un error en el inicio de sesión");
  }
});

// Endpoint de registro
app.post('/registro', async (req, res) => {
  const { registrarCelular, registrarClave } = req.body;
  try {
    const [results] = await connection.query(
      "INSERT INTO `usuarios` (`n_celular`, `contraseña`) VALUES (?,?);",
      [registrarCelular, registrarClave]
    );
    if (results.affectedRows > 0) {
      res.status(201).send("Registro de los datos correctamente");
    } else {
      res.status(400).send("No se pudo registrar");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Hubo un error en el registro");
  }
});