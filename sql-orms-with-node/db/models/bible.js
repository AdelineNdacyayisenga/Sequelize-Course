const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Bible extends Sequelize.Model {};
    Bible.init({
        bookTitle: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide value for "bookTitle',
                },
                notEmpty: {
                    msg: 'Please provide value for "bookTitle"'
                }
            }
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide value for "author"'
                },
                notEmpty: {
                    msg: 'Please provide value for "author"'
                },
                
            }
        },
        chapters: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide value for "chapters"'
                },
                notEmpty: {
                    msg: 'Please provide value for "chapters"'
                }, min: {
                    args: 1,
                    msg: "Provide chapters greater than 0"
                }
            }
        },
    }, {
        sequelize,
        freezeTableName: true,
        timestamps: false
    });
    return Bible;
}