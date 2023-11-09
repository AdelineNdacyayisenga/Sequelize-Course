const db = require('./db');
const { Movie, Person, Bible } = db.models;
const { Op } = db.Sequelize;

(async () => {
    await db.sequelize.sync({ force: true });
    try{
        const movie = await Movie.create({
            title: 'The chosen',
            runtime: 81,
            releaseDate: '1895-12-28',
            isAvailableOnVHS: true,
        });
        console.log(movie.toJSON());

        const movie2 = await Movie.create({
            title: 'The incredibles',
            runtime: 115,
            releaseDate: '2004-04-14',
            isAvailableOnVHS: true,
        });
        console.log(movie2.toJSON());

        const movie3 = await Movie.build({ //you have to manually save instance to the db
            title: 'Toy Story 3',
            runtime: 103,
            releaseDate: '2010-06-18',
            isAvailableOnVHS: false,
        });
        await movie3.save(); //save record
        console.log(movie3.toJSON());

        // New Person record
        const person1 = await Person.create({
            firstName: "Adeline",
            lastName: "Ndacyayisenga"
        });
        console.log(person1.toJSON());
        const person2 = await Person.create({
            firstName: "Angelique",
            lastName: "Mbabazi"
        });
        console.log(person2.toJSON());

        // New Bible books records
        const bible1 = await Bible.create({
            bookTitle: "Exodus",
            author: "Moses",
            chapters: 40
        });
        console.log(bible1.toJSON());
        
        const bible2 = await Bible.create({
            bookTitle: "Genesis",
            author: "Moses",
            chapters: 50
        });
        console.log(bible2.toJSON());

        const bible3 = await Bible.create({
            bookTitle: "Romans",
            author: "Paul",
            chapters: 16
        });
        console.log(bible3.toJSON());

        const bible4 = await Bible.create({
            bookTitle: "Acts",
            author: "Luke",
            chapters: 28
        });
        console.log(bible4.toJSON());

        //const movieById = await Movie.findByPk(1);
        //const movieByRunTime = await Movie.findOne({ where: { runtime: 81 } });
        //console.log(movieByRunTime.toJSON());
        //const movies = await Movie.findAll(); //array holding all instances (records)
        const people = await Person.findAll({
            attributes: ['firstName', 'lastName'], // return only these attributes
            where: {
                lastName: 'Mbabazi'
            } //for AND conditions, include 2 properties in the where object
        });
        console.log(people.map(person => person.toJSON()));

        const movies = await Movie.findAll({
            attributes: ['id', 'title'],
            where: {
                releaseDate: {
                    [Op.gte]: '2004-01-01' //greater than or equal to 
                }
            }
        });
        console.log(movies.map(movie => movie.toJSON()));

    } catch(error) { 
        //Sequelize containers errors property, an array with 1 or more ValidationErrorItems
        if (error.name === 'SequelizeValidationError'){
            const errors = error.errors.map(err => err.message);
            console.error('Validation errors: ', errors);
        } else {
            throw error;
        }
    }
}) ();

//CRUD
/**
 * To Create new records (build () AND create())
 * 
 * To retrieve record:
 * findByPk() retrieves a single instance by its primary key (or id) value
 * findOne() find and retrieve one specific element in a table
 * findOne also takes an option object
 * findAll() retrieves a collection of all records, instead of a single record
 * findAll() can also take options object to filter results
 * 
 */

