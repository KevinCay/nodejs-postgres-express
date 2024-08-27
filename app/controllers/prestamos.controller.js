const db = require('../config/db.config.js');
const Prestamo = db.Prestamo;

// Crear un nuevo préstamo
exports.create = (req, res) => {
    const prestamo = {
        codigo_libro: req.body.codigo_libro,
        codigo_usuario: req.body.codigo_usuario,
        fecha_salida: req.body.fecha_salida,
        fecha_maxima_devolver: req.body.fecha_maxima_devolver,
        fecha_devolucion: req.body.fecha_devolucion || null
    };

    Prestamo.create(prestamo)
        .then(data => {
            res.status(200).json({
                message: "Préstamo creado exitosamente",
                prestamo: data
            });
        })
        .catch(err => {
            res.status(500).json({
                message: "Error al crear el préstamo",
                error: err.message
            });
        });
};

// Actualizar un préstamo por ID
exports.updateById = (req, res) => {
    const id = req.params.id;

    Prestamo.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).json({
                    message: "Préstamo actualizado exitosamente."
                });
            } else {
                res.status(404).json({
                    message: `No se pudo actualizar el préstamo con id=${id}. Tal vez no fue encontrado o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: `Error al actualizar el préstamo con id=${id}`,
                error: err.message
            });
        });
};

// Buscar un préstamo por ID
exports.getById = (req, res) => {
    const id = req.params.id;

    Prestamo.findByPk(id)
        .then(data => {
            if (data) {
                res.status(200).json(data);
            } else {
                res.status(404).json({
                    message: `No se encontró el préstamo con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: `Error al buscar el préstamo con id=${id}`,
                error: err.message
            });
        });
};

// Buscar préstamos por código de usuario
exports.getByCodigoUsuario = (req, res) => {
    const codigo_usuario = req.query.codigo_usuario;

    Prestamo.findAll({
        where: { codigo_usuario: codigo_usuario }
    })
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: `Error al buscar préstamos del usuario con código=${codigo_usuario}`,
                error: err.message
            });
        });
};

// Eliminar un préstamo por ID
exports.deleteById = (req, res) => {
    const id = req.params.id;

    Prestamo.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).json({
                    message: "Préstamo eliminado exitosamente."
                });
            } else {
                res.status(404).json({
                    message: `No se pudo eliminar el préstamo con id=${id}. Tal vez no fue encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: `Error al eliminar el préstamo con id=${id}`,
                error: err.message
            });
        });
};
