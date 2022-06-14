const client = require('../config/db');

const projectDatamapper = {
    
    async findAll() {
            const result = await client.query('SELECT * FROM "project" INNER JOIN project_photo ON project_photo.project_id = project.id WHERE cover_photo = true');
            return result.rows;
    },

    async findByPk(id) {
        const preparedQuery = {
            text: `SELECT * FROM "project" INNER JOIN project_photo ON project_photo.project_id = project.id WHERE cover_photo = false AND project_id = $1`,
            values: [id]
        }
        const result = await client.query(preparedQuery);
        return result.rows;
    },

    async delete(id) {
        await client.query(`DELETE FROM "project" WHERE "project_id" = $1`, [id]);
    },

    async insert(data) {
        const preparedQuery = {
            text: `
                INSERT INTO "project"
                (
                    "id",
                    "name", 
                    "slug", 
                    "location", 
                    "date", 
                    "program", 
                    "surface_area", 
                    "type", 
                    "client", 
                    "design", 
                    "photo_credit", 
                    "user_id", 
                    "status_id"
                    )
                VALUES
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15);
            `,
            values: [
                data.id,
                data.name,
                data.slug,
                data.location,
                data.date,
                data.program,
                data.surface.area,
                data.type,
                data.client,
                data.design,
                data.photo_credit,
                data.user_id,
                data.status_id,
            ]
        }
        const result = await client.query(preparedQuery);
        return result.rowCount;
    },
};

module.exports = projectDatamapper;