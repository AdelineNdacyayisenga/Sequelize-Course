//require sequelize module
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    //Define a movie model that extends Sequelize.Model base class
    class Movie extends Sequelize.Model { }
    //initialize a model
    //new table in the db with the name 'Movies'
    //Column 'title' of type string
    //2 arguments: 1. object literal of model attributes; 2. object of options (sequelize is required --> {sequelize: sequelize})
    Movie.init({
        title: Sequelize.STRING,

    }, { sequelize });

    return Movie;
} //export the initialized Movie model
