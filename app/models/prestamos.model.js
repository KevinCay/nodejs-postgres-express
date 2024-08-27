module.exports = (sequelize, Sequelize) => {
    const Prestamo = sequelize.define('prestamo', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        codigo_libro: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        codigo_usuario: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        fecha_salida: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        fecha_maxima_devolver: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        fecha_devolucion: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    });

    return Prestamo;
};
