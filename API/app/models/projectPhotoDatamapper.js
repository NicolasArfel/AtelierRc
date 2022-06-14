const client = require('../config/db');

const projectPhotoDatamapper = {
    
    async findAll() {
            const result = await client.query('SELECT * FROM project_photo');
            return result.rows;
    },

    async findByPk(id) {
        const preparedQuery = {
            text: `SELECT * FROM "project_photo" WHERE "id" = $1`,
            values: [id]
        }
        const result = await client.query(preparedQuery);
        return result.rows[0];
    },

    async delete(id) {
        await client.query(`DELETE FROM "project_photo" WHERE "project_photo_id" = $1`, [id]);
    },

    async insert(data) {
        const preparedQuery = {
            text: `
                INSERT INTO "project_photo"
                (
                    "id",
                    "name", 
                    "position",
                    "photo_credit",
                    "cover_photo",
                    "project_id"
                    )
                VALUES
                ($1, $2, $3, $4, $5, $6);
            `,
            values: [
                data.id,
                data.name,
                data.position,
                data.photo_credit,
                data.cover_photo,
                data.project_id,
            ]
        }
        const result = await client.query(preparedQuery);
        return result.rowCount;
    },
};

module.exports = projectPhotoDatamapper;