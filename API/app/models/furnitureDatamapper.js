const client = require('../config/db');

const furnitureDatamapper = {
    
    async findAll() {
            const result = await client.query('SELECT * FROM furniture');
            return result.rows;
    },

    async findByPk(id) {
        const preparedQuery = {
            text: `SELECT * FROM "furniture" WHERE "id" = $1`,
            values: [id]
        }
        const result = await client.query(preparedQuery);
        return result.rows[0];
    },

    async delete(id) {
        const preparedDeleteQuery = {
            text: `DELETE FROM "furniture" WHERE "id" = $1;`,
            values: [id],
        };
        const deletedFurniture = await client.query(preparedDeleteQuery);
        return !!deletedFurniture.rowCount;
    },

    async insert(data, originalName, spacingFurnitureName, slugFurnitureName) {
        const preparedFurnitureQuery = {
            text: `
                INSERT INTO "furniture"
                (
                    "name",
                    "slug",
                    "type",
                    "designer",
                    "editor",
                    "date"
                    "dimensions",
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

                data.furniture_name,
                data.slug,
                data.type,
                data.designer,
                data.editor,
                data.date,
                data.dimensions,
                data.condition,
                data.description,
                data.availability,
                data.price,
                data.user_id,
            ]}

            const result1 = await client.query(preparedFurnitureQuery);
            console.log("je suis ici", result1);
            const furnitureId = result1.rows[0].id;
    
            if (originalName === "") {
                originalName = null;
                console.error(`Merci de remplir le champs ${originalName}`);
            }
    
            const preparedPhotoQuery = {
                text: `
                  INSERT INTO "furniture_photo"  (
                            "name", 
                            "position", 
                            "photo_credit", 
                            "cover_photo", 
                            "furniture_id"
                            )
                         VALUES 
                  ($1, $2, $3, $4, $5);`,
    
                values: [
                    originalName,
                    data.position,
                    data.photo_credit,
                    data.cover_photo,
                    furnitureId,
                ],
            };
            const result2 = await client.query(preparedPhotoQuery);
            return result2.rowCount;
        }
    
};


module.exports = furnitureDatamapper;