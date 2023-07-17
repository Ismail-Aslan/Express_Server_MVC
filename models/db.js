const Sequelize = require("sequelize");

// creating the auth url
const url = process.env.DB_URL; // 'postgres://user:pass@example.com:5432/dbname'

// creating the db instance
const sampledb = new Sequelize(url, {
    logging: false,
    dialect: 'postgres',
    define: {
        underscored: true,
        freezeTableName: true,
        timestamps: true
    },
});

module.exports = { sampledb };

require("./db.js")