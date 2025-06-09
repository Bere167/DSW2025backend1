import express from "express";
import { TipoCliente } from './tiposcliente.entity.js'
import { categoria } from "./categoriaEntity.js";

const app = express()

const categorias = [
  new categoria(
    'Monitores',
    'primera',
    '123-456-789'
  )
]
app.get('/api/categorias',(req, res) => {
  res.json(categorias)
})

app.listen(3000, ()=> {
  console.log('Server running pn http://localhost:3000/')
})