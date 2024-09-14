const { Sequelize } = require('sequelize')
const { PostgresDialect } = require('process')

const sequelize = new Sequelize({
    dialect: PostgresDialect,
    database: 'shop-db',
    user: 'shop',
    password: "test24password",
    host: 'localhost',
    port: 5432,
    ssl: true,
    clientMinMessages: 'notice',
});

