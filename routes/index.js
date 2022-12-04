var express = require('express');
const port = 3000
const app = express()
const userController = require('../controller/userController')
const jurusanController = require('../controller/jurusanController')
var bodyParser = require('body-parser');
const kategoriController = require('../controller/kategoriController');
const produkController = require('../controller/produkController');

app.use(bodyParser.json())


app.get("/user", userController.list)
app.post("/user", userController.create)
app.get("/user/:id", userController.get)
app.put("/user/:id", userController.update)
app.delete("/user/:id", userController.destroy)

app.get("/jurusan", jurusanController.list)
app.post("/jurusan", jurusanController.create)
app.get("/jurusan/:id", jurusanController.show)
app.put("/jurusan/:id", jurusanController.update)
app.delete("/jurusan/:id", jurusanController.destroy)

app.post("/kategori", kategoriController.create)
app.get("/kategori", kategoriController.list)

app.post("/produk", produkController.create)
app.get("/produk", produkController.list)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})