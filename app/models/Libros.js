module.exports = (sequelize, Sequelize) => {
    const Libro = sequelize.define('libro', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre_libro: {
            type: Sequelize.STRING(60),
            allowNull: false
        },
        editorial: {
            type: Sequelize.STRING
        },
        autor: {
            type: Sequelize.STRING
        },
        genero: {
            type: Sequelize.STRING
        },
        pais_autor: {
            type: Sequelize.STRING
        },
        numero_paginas: {
            type: Sequelize.INTEGER
        },
        ano_edicion: {
            type: Sequelize.STRING
        },
        precio_libro: {
            type: Sequelize.FLOAT
        }
    });

    return Libro;
};
