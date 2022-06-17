const client = require('../config/db');

// /**
//  * @typedef {Object} InputData
//  * @property {number} id - Unique identifyer of the table
//  */

const projectDatamapper = {
    /**
     * Get all the project without filter nore order
     * @returns all the all projects from the database
     */

    async findAll() {
            const result = await client.query('SELECT project.name AS project_name, * FROM "project" INNER JOIN project_photo ON project_photo.project_id = project.id WHERE cover_photo = true');
            
            return result.rows;
    },


    /**
     * Get the project by his id
     * @param {number} id - the id the selected project
     * @returns the selected project or undefined if no project has this category
     */

    async findByPk(id) {
        const preparedQuery = {
            text: `SELECT * FROM "project" INNER JOIN project_photo ON project_photo.project_id = project.id WHERE project_id = $1`,
            values: [id]
        }
        const result = await client.query(preparedQuery);

        if(result.rowCount === 0) {
            return null;
        }
        
        return result.rows;
    },

    /**
     * Add to the database
     * @param {InputData} data - the data to insert
     * @returns The project inserted in the database
     */
    async insert(data) {

        //! une possibilité de vérification supplémentaire :
        // const projectCheck = {
        //     text: `SELECT * FROM project WHERE name=$1 OR slug=$2`,
        //     values: [data.project_name, data.slug]
        // }
        // const result = await client.query(projectCheck);
        // console.log('je suis ici dans le check', result);
        // if (result.rows.length > 0) {
        //     return { error: "Le nom du projet existe déjà"}
        // }

        const preparedProjectQuery = {
            text: ` INSERT INTO "project"
                    (
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
                    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
                    RETURNING id;`,

                            values: [
                                data.project_name,
                                data.slug,
                                data.location,
                                data.date,
                                data.program,
                                data.surface_area,
                                data.type,
                                data.client,
                                data.design,
                                data.project_photo_credit,
                                data.user_id,
                                data.status_id,
                            ]
                        }
        
        const result1 = await client.query(preparedProjectQuery);
        console.log('je suis ici', result1);
        const projectId = result1.rows[0].id;
        //console.log(projectId);

        const preparedPhotoQuery = {
        text: `
              INSERT INTO "project_photo"  (
                        "name", 
                        "position", 
                        "photo_credit", 
                        "cover_photo", 
                        "project_id"
                        )
                     VALUES 
              ($1, $2, $3, $4, $5);`,

            values: [
                data.photo_name,
                data.position,
                data.photo_credit,
                data.cover_photo,
                projectId
            ]
        }
        const result2 = await client.query(preparedPhotoQuery);
        return result2.rowCount;
        },

        //! fonction à compléter

        /**
         * Modify a project in the database 
         * @param {number} id - the id to modify
         * @param {InputData} inputData 
         * @returns 
         */
        async update(id, inputData) {
            const data = { ...inputData, id };
            const savedProject = await client.query(
                'SELECT * FROM "project"($1)',
                [data],
            );
    
            return savedProject.rows[0];
        },

        /**
         * Delete the project from the database
         * @param {number} id - the id to delete
         * @returns the deleted project
         */

        async delete(id) {
            const preparedDeleteQuery ={
                text:`DELETE FROM "project" WHERE "id" = $1;`,
                values:[id]
            }
        const deletedProject = await client.query(preparedDeleteQuery);
        return !!deletedProject.rowCount;
        },


        //! fonction à compléter si je souhaite utiliser le IsUnique (ne fonctionne pas pour l'instant)
        // /**
        //  * Vérify if a project already exist with this title or slug
        //  * @param {object} inputData - the result data entered by the client in the form
        //  * @param {number} projectId - the id of the project (optionnal)
        //  * @returns the existing category
        //  */

        // async isUnique(inputData, projectId) {
        //     const fields = [];
        //     const values = [];
        //     Object.entries(inputData).forEach(([key, value], index) => {
        //         if (['name', 'slug'].includes(key)) {
        //             fields.push(`"${key}" = $${index + 1}`);
        //             values.push(value);
        //         }
        //     });
    
        //     const preparedQuery = {
        //         text: `SELECT * FROM project WHERE (${fields.join(' OR ')})`,
        //         values,
        //     };
    
        //     if (projectId) {
        //         preparedQuery.text += ` AND id <> $${values.length + 1}`;
        //         preparedQuery.values.push(projectId);
        //     }
        //     const result = await client.query(preparedQuery);
    
        //     return result.rows[0];
        // },







        //! ne pas utiliser, exemple de requête pour créer des projets
        // const preparedQuery = {
        //     text: `
        //         INSERT INTO "project"
        //         (
        //             "name", 
        //             "slug", 
        //             "location", 
        //             "date", 
        //             "program", 
        //             "surface_area", 
        //             "type", 
        //             "client", 
        //             "design", 
        //             "photo_credit", 
        //             "user_id", 
        //             "status_id"
        //             )
        //         VALUES
        //         ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);
        //     `,
        //     values: [
        //         data.name,
        //         data.slug,
        //         data.location,
        //         data.date,
        //         data.program,
        //         data.surface.area,
        //         data.type,
        //         data.client,
        //         data.design,
        //         data.photo_credit,
        //         data.user_id,
        //         data.status_id,
        //     ]
        // }
        // const result = await client.query(preparedQuery);
        // return result.rowCount;
    //},
};

module.exports = projectDatamapper;