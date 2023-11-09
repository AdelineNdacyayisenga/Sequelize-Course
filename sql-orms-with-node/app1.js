
const db = require('./db');
const { Movie } = db.models;

//Define the async function (IIFE immediately invoked function expression)
(async () => {
    await db.sequelize.sync({ force: true }); //automatically create or update the databse tables
    //sync i.e CREATE TABLE IF NOT EXISTS
    //force:true i.e DROP TABLE IF EXISTS: deletes an existing table each time you start your app, and recreates it from the model definition
    try {
        //await sequelize.authenticate(); //returns a promise that revokes to a successful, authenticated connection to the db
        
        //create a record/row
        const movie = await Movie.create({
            title: 'The Chosen',
        });
        console.log(movie.toJSON());

        const movie2 = await Movie.create({
            title: "Prayer closet"
        })
        console.log(movie2.toJSON());
    } catch (error) {
        console.error('Error connect to the db: ', error);
    }
})();



