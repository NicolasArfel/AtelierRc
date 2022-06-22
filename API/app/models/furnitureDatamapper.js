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

    async addImageToFurniture(photo_credit, furniture_id, originalname, position) {

        // if(originalname === ""){
        //     originalname = null;
        //     console.error(`Merci de remplir le champs ${originalname}`);
        // }

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
                position,
                photo_credit,
                false,
                furniture_id
            ]
        }
        const result = await client.query(preparedPhotoQuery);
        return result.rowCount;

        },

    async deletePhoto(id) {
        const preparedPhotoDeleteQuery ={
            text:`DELETE FROM "furniture_photo" WHERE "id" = $1;`,
            values:[id]
        }
    const deletedPhoto = await client.query(preparedPhotoDeleteQuery);
    return !!deletedPhoto.rowCount;
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

    async updateOneFurniture(id, name, slug, type, designer, editor, date, width, height, length, condition, description, availability, price) {


        const preparedQuery = {
            text: `UPDATE "furniture" SET name=$2, slug=$3, type=$4, designer=$5, editor=$6, date=$7, width=$8, height=$9, length=$10, condition=$11, description=$12, availability=$13, price=$14 WHERE id=$1`,
            values:[id, name, slug, type, designer, editor, date, width, height, length, condition, description, availability, price]
        };
    
    
        const result = await client.query(preparedQuery);

    
        // if(result.rowCount === 0) {
        //     return null;
        // }
        
        return result;
    },

    async updateCoverPhoto(data, id, originalname) {

        const preparedQuery = {
            text: `UPDATE "furniture_photo" SET name=$2, photo_credit=$3, position=$4, cover_photo=$5 WHERE id=$1`,
            values:[id, originalname, data.photo_credit, 1, true]
        };
    
    
        const result = await client.query(preparedQuery);

    
        // if(result.rowCount === 0) {
        //     return null;
        // }
        
        return result;


    },

    async turnOffCoverPhoto(photo_id) {

        const preparedQuery = {
            text: `UPDATE "furniture_photo" SET cover_photo=$2 WHERE id=$1`,
            values:[photo_id, false]
        };
    
    
        const result = await client.query(preparedQuery);

    
        // if(result.rowCount === 0) {
        //     return null;
        // }
        
        return result;
    

    }

   
};

module.exports = furnitureDatamapper;