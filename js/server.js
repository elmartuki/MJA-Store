const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const { findPackageJSON } = require("module");

const applicacion = express();
const puerto = 3000;

applicacion.use(cors());
applicacion.use(express.json());

applicacion.use(bodyParser.json());

applicacion.post("/guardar-productos", (req, res) => {
  const productos = req.body;

  fs.writeFileSync("productos.json", JSON.stringify(productos, null, 2));
  res.json({ mensaje: "Productos guardados correctamente ✅" });
});

applicacion.get("/productos", (req, res) => {
  if (fs.existsSync("productos.json")) {
    const data = fs.readFileSync("productos.json");
    res.json(JSON.parse(data));
  } else {
    res.json([]);
  }
});

applicacion.listen(puerto, () => {
  console.log(`Servidor corriendo en http://127.0.0.1:${puerto}`);
});
