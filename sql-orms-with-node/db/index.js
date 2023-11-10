//Configure Sequelize instance and require the Movie model

const Sequelize = require('sequelize');

//connect to a SQLite database
//constructor to create instance; initialize a database connection with parameters
const sequelize = new Sequelize({
    dialect: 'sqlite', //version of SQL being used
    storage: 'movies.db', //creates a db called movies
    logging: false, //prevents logging of extra SQL in console

    /*can also set model options globally
    define: {
        freezeTableName: true,
        timestamps: false,
    } */
});

const db = {
    sequelize, 
    Sequelize,
    models: {},
}
//import Person Model
db.models.Person = require('./models/person.js')(sequelize);

db.models.Movie = require('./models/movie.js')(sequelize);

db.models.Bible = require('./models/bible.js')(sequelize);
module.exports = db; //the db contains all the models