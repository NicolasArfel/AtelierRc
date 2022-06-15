const client = require('../config/db');


const userDatamapper = {

 async findUser(email) {
    const preparedQuery = {
        text: `SELECT * FROM "user" WHERE "email"=$1`,
        values:[email]
    }
    const result = await client.query(preparedQuery);
    return result.rows[0];
},
};

module.exports = userDatamapper;