const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Movie extends Sequelize.Model {}
    Movie.init({
        //set custom primary key column
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: Sequelize.STRING(500), //specifies a new length 500; default is 255
            allowNull: false, //disallow null,
            validate: {
                //notEmpty: true,//prevents value from being set to empty string
                notEmpty: {
                    msg: 'Please provide a value for "title"', //custom error message
                },
                notNull: {
                    msg: 'Please provide a value for "title"'
                }
            }
        },
        runtime: { 
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide a value for "runtime"'
                },
                min: { //there is also max
                    args: 1,
                    msg: 'Please provide a value greater than 0 for "runtime"'
                }

            }
        }, 
        releaseDate: { 
            type: Sequelize.DATEONLY,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide a value for "releaseDate"'
                },
                isAfter: { //there is also isBefore
                    args: '1895-12-27',
                    msg: 'Please provide a value on or after "1895-12-27"'
                }
            }
        },
        isAvailableOnVHS: { 
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false, //set default value
        },
    }, { //second argument: options
        sequelize, //sequelize instance (Required),
        //timestamps: false //disable timestamps from the record
        //freezeTableName: true //disable plural table names from the model class name (Changes table name from Movies to Movie)
        //modelName: 'movie' // set the model name to 'movie'(or any custom name) instead of Movies;
        tableName: 'my_movies_table' //table name change in the db
    }); 

    return Movie;
}