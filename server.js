const env = require('./app/config/env.js'); // Ruta correcta al archivo env.js
const Sequelize = require('sequelize');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: env.pool
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.Libro = require('./app/models/Libros.js')(sequelize, Sequelize); 
db.Prestamo = require('./app/models/prestamos.model.js')(sequelize, Sequelize);


db.sequelize.sync() 
  .then(() => {
    console.log('Database synchronized without dropping tables');
  })
  .catch(error => {
    console.error('Error synchronizing the database:', error);
  });


const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));


app.use(bodyParser.json());


let router = require('./app/routers/router.js'); 
app.use('/', router);


app.get("/", (req, res) => {
  res.json({ message: "Bienvenido Estudiantes de UMG" });
});

// Iniciar servidor
const PORT = process.env.PORT || 8080; // Corregido error tipográfico
const server = app.listen(PORT, 'localhost', function () {
  let host = 'localhost';
  let port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});
