const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

// const sequelize = new Sequelize('test_db', 'root', 'magento', {
//     host: '127.0.0.1',
//     dialect: 'mysql'
// });

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // sequelize = new Sequelize(config.database, config.username, config.password, config);
  sequelize = new Sequelize('test_db', 'root', 'magento', {
      host: "127.0.0.1",
      dialect: 'mysql',
      define: {
          timestamps: false
      }
  });
}

try {
    sequelize.authenticate();
    console.log('Connection Database Successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// sequelize 
// .sync({ force: true })
// .then(function(err) {
//     console.log('It worked!');
//   }, function (err) { 
//          console.log('An error occurred while creating the table:', err);
//   });

db.sequelize = sequelize;

module.exports = db;