import { categoria } from './categoriaEntity.js'

const express = require('express');
const router = express.Router();

// Datos en memoria
let categorias = [];

// Crear
router.post('/categorias', (req, res) => {
  const { name } = req.body;
  const nuevaCategoria = { id: crypto.randomUUID(), name };
  categorias.push(nuevaCategoria);
  res.status(201).json(nuevaCategoria);
});

// Obtener todos los objetos
router.get('/categorias', (req, res) => {
  res.json(categorias);
});

// Obtener un objeto especifico
router.get('/categorias/:id', (req, res) => {
  const { id } = req.params;
  const categoria = categorias.find((cat) => cat.id === id);
  if (categoria) {
    res.json(categoria);
  } else {
    res.status(404).json({ message: 'Categoría no encontrada' });
  }
});

// Actualizar
router.put('/categorias/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const categoria = categorias.find((cat) => cat.id === id);
  if (categoria) {
    categoria.name = name;
    res.json(categoria);
  } else {
    res.status(404).json({ message: 'Categoría no encontrada' });
  }
});

// Eliminar
router.delete('/categorias/:id', (req, res) => {
  const { id } = req.params;
  const index = categorias.findIndex((cat) => cat.id === id);
  if (index !== -1) {
    const categoriaEliminada = categorias.splice(index, 1);
    res.json(categoriaEliminada[0]);
  } else {
    res.status(404).json({ message: 'Categoría no encontrada' });
  }
});

module.exports = router;