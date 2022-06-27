const client = require('../config/db');

const furnitureDatamapper = {

    async findAll() {
        const result = await client.query('SELECT furniture.name AS furniture_name, * FROM "furniture" INNER JOIN furniture_photo ON furniture_photo.furniture_id = furniture.id WHERE cover_photo = true');
        return result.rows;
    },

    async findByPk(id) {
        const preparedQuery = {
            text: 'SELECT furniture.name AS furniture_name,furniture_photo AS photo_name, * FROM "furniture" INNER JOIN furniture_photo ON furniture_photo.furniture_id = furniture.id WHERE furniture_id = $1 ORDER BY furniture_photo.position',
            values: [id]
        }
        const result = await client.query(preparedQuery);

        if (result.rowCount === 0) {
            return null;
        }

        return result.rows;
    },

    async findFurnitureByPkPhoto(id) {
        const preparedQuery = {
            text: `SELECT furniture.name AS furniture_name, furniture_photo.name AS photo_name, * FROM "furniture" INNER JOIN furniture_photo ON furniture_photo.furniture_id = furniture.id WHERE furniture_photo.id = $1`,
            values: [id],
        };
        const result = await client.query(preparedQuery);

        if (result.rowCount === 0) {
            return null;
        }

        return result.rows;
    },

    async findPhotoByPk(id) {
        const preparedQuery = {
            text: `SELECT * FROM "furniture_photo" WHERE id = $1`,
            values: [id],
        };
        const result = await client.query(preparedQuery);

        if (result.rowCount === 0) {
            return null;
        }

        return result.rows;
    },


    async delete(id) {
        const preparedDeleteQuery = {
            text: `DELETE FROM "furniture" WHERE "id" = $1;`,
            values: [id],
        };
        const deletedFurniture = await client.query(preparedDeleteQuery);
        return !!deletedFurniture.rowCount;
    },

    async deletePhoto(id) {
        const preparedPhotoDeleteQuery = {
            text: `DELETE FROM "furniture_photo" WHERE "id" = $1;`,
            values: [id],
        };
        const deletedPhoto = await client.query(preparedPhotoDeleteQuery);
        return !!deletedPhoto.rowCount;
    },

    async updateOneFurniture(id, name, slug, type, designer, editor, date, dimensions, condition, description, availability, price) {
        const preparedQuery = {
            text: `UPDATE "furniture" SET name=$2, slug=$3, type=$4, designer=$5, editor=$6, date=$7, dimensions=$8, condition=$9, description=$10, availability=$11, price=$12 WHERE id=$1`,
            values: [id, name, slug, type, designer, editor, date, dimensions, condition, description, availability, null],
        };

        const result = await client.query(preparedQuery);

        return result;
    },

    async insertFurnitureWithCoverPhoto(data, originalname, spacingFurnitureName, slugFurnitureName) {
        const preparedQuery = {
            text: ` INSERT INTO "furniture"(
                "name",
                "slug",
                "type",
                "designer",
                "editor",
                "date",
                "dimensions",
                "condition",
                "description",
                "availability",
                "price",
                "user_id"
                )
                VALUES
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
                RETURNING id;`,
            values: [
                spacingFurnitureName,
                slugFurnitureName,
                data.type,
                data.designer,
                data.editor,
                data.date,
                data.dimensions,
                data.condition,
                data.description,
                data.availability,
                null,
                data.user_id,
            ],
        };

        const result1 = await client.query(preparedQuery);
        console.log("je suis ici", result1);
        const furnitureId = result1.rows[0].id;

        if (originalname === "") {
            originalname = null;
            console.error(`Merci de remplir le champs ${originalname}`);
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
                originalname,
                data.position,
                data.photo_credit,
                data.cover_photo,
                furnitureId,
            ],
        };
        const result2 = await client.query(preparedPhotoQuery);
        return result2.rowCount;

    },

    async addImageToFurniture(photo_credit, furniture_id, originalname, position) {

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

            values: [originalname, position, photo_credit, false, furniture_id],
        };
        const result = await client.query(preparedPhotoQuery);
        return result.rowCount;
    },

    async turnOffCoverPhoto(photo_id, position) {
        const preparedQuery = {
            text: `UPDATE "furniture_photo" SET cover_photo=$2, position=$3 WHERE id=$1`,
            values: [photo_id, false, position],
        };

        const result = await client.query(preparedQuery);

        // if(result.rowCount === 0) {
        //     return null;
        // }

        return result;
    },

    async turnONCoverPhoto(id) {
        const preparedQuery = {
            text: `UPDATE "furniture_photo" SET cover_photo=$2, position=$3 WHERE id=$1`,
            values: [id, true, 1],
        };

        const result = await client.query(preparedQuery);

        return result;
    },
};


module.exports = furnitureDatamapper;