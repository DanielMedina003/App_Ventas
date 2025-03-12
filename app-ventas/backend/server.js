const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

// Habilitar CORS y JSON
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root",   // Cambia si tienes otro usuario
  password: "",   // Agrega tu contraseña si tienes una
  database: "burger_shop",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Error al conectar a MySQL:", err);
    return;
  }
  console.log("✅ Conectado a la base de datos MySQL");
});

// Ruta de prueba (opcional)
app.get("/", (req, res) => {
  res.send("🚀 API de Burger Shop funcionando correctamente!");
});

// Ruta para obtener hamburguesas
app.get("/burgers", (req, res) => {
  db.query("SELECT * FROM burgers", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener las hamburguesas" });
    }
    console.log("📦 Datos enviados al frontend:", results);
    res.json(results);
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
