import {Sequelize} from 'sequelize';

const db = new Sequelize('node-ts','root', 'AAifonlyheknew16', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
});

export default db;