const client = require('../config/db');

const furnitureDatamapper = {
    
    async findAll() {
            const result = await client.query('SELECT furniture.name AS furniture_name, * FROM "furniture" INNER JOIN furniture_photo ON furniture_photo.furniture_id = furniture.id WHERE cover_photo = true');
            return result.rows;
    },

    async findByPk(id) {
        const preparedQuery = {
            text: 'SELECT furniture.name AS furniture_name, * FROM "furniture" INNER JOIN furniture_photo ON furniture_photo.furniture_id = furniture.id WHERE furniture_id = $1',
            values: [id]
        }
        const result = await client.query(preparedQuery);
        return result.rows[0];
    },

    async delete(id) {
        const preparedDeleteQuery ={
            text:`DELETE FROM "furniture" WHERE "id" = $1;`,
            values:[id]
        }
    const deletedFurniture = await client.query(preparedDeleteQuery);
    return !!deletedFurniture.rowCount;
    },

    async insert(data) {
        const preparedQuery = {
            text: `
                INSERT INTO "furniture"
                (
                    "id",
                    "name",
                    "slug",
                    "type",
                    "condition",
                    "description"
                    "availability",
                    "price",
                    "user_id",
                    "created_at",
                    "updated_at"
                    )
                VALUES
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15);
            `,
            values: [
                data.id,
                data.name,
                data.slug,
                data.type,
                data.condition,
                data.description,
                data.availability,
                data.price,
                data.user_id,
            ]
        }
        const result = await client.query(preparedQuery);
        return result.rowCount;
    },

    // async updateOneProject(id, name, slug, location, date, program, surface_area, type, project_client, design, photo_credit) {


    //     const preparedQuery = {
    //         text: `UPDATE "project" SET name=$2, slug=$3, location=$4, date=$5, program=$6, surface_area=$7, type=$8, client=$9, design=$10, photo_credit=$11 WHERE id=$1`,
    //         values:[id, name, slug, location, date, program, surface_area, type, project_client, design, photo_credit]
    //     };
    
    
    //     const result = await client.query(preparedQuery);

    
    //     // if(result.rowCount === 0) {
    //     //     return null;
    //     // }
        
    //     return result.rows;
    // },
};

module.exports = furnitureDatamapper;