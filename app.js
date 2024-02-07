const express = require('express')
const app = express()
const path = require('path')
const port = 3030;

/* RUTAS */
const authRoutes = require('./routes/authentication.routes')
//damos por valor de esta variable la ruta, los 3 archivos estas relacionados,se utiliza este metodo para trabajar mas organizado


app.use(express.static('public'))

//enrudadores
app.use("/autenticacion", authRoutes)
//pasamos el valor de la variable como ruta


app.listen(port,() => console.log(`http://localhost:${port}`))