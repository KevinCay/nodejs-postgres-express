const express = require('express');
const router = express.Router();
const libroController = require('../controllers/controller.js');
const prestamos = require('../controllers/prestamos.controller.js');

router.post('/api/libros/create', libroController.createLibro);
router.get('/api/libros/all', libroController.getAllLibros);
router.get('/api/libros/byname/:name', libroController.getLibrosByName);
router.put('/api/libros/update/:id', libroController.updateLibro);
router.delete('/api/libros/delete/:id', libroController.deleteLibro);

router.post('/api/prestamos/create', prestamos.create);
router.put('/api/prestamos/update/:id', prestamos.updateById);
router.get('/api/prestamos/:id', prestamos.getById);
router.get('/api/prestamos/usuario/:codigo_usuario', prestamos.getByCodigoUsuario);
router.delete('/api/prestamos/delete/:id', prestamos.deleteById);

module.exports = router;

