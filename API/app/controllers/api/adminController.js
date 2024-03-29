const userDataMapper  = require('../../models/userDatamapper.js');
const client = require('../../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminController = {

    async updateAdminProfile(req, res) {
        const adminProfile = await userDataMapper.findByPk(req.params.id);
        console.log (adminProfile);
        if (!adminProfile) {
            return res.json({status: 'user profile not found'});
        }
        
        if(adminProfile) {
            const id = req.params.id;
            console.log(id)
            const email = req.body.email;
            console.log(email)
            const firstname = req.body.firstname;
            console.log(firstname)
            const lastname = req.body.lastname;
            console.log(lastname)
            const password = req.body.password;
            console.log(password)
          

            const salt = await bcrypt.genSalt(10);
            const bcryptPassword = await  bcrypt.hash( password, salt);
            //console.log(bcryptPassword);

            const updateProfile = await userDataMapper.updateUserProfile(id, email, firstname, lastname, bcryptPassword);
            //console.log(updateProfile);

            if(updateProfile){

            function generateAccessToken(updateProfile) {
                return jwt.sign(updateProfile, process.env.ACCESS_TOKEN_SECRET); //{expiresIn: '1800s'}
             }
    
                // const {id, email, lastname, firstname, role} = user
                // const newUser = {id, email, lastname, firstname, role};
                
                const accessToken = generateAccessToken({
                    id,
                    email,
                    firstname,
                    lastname,
                    role: adminProfile.role
                });
                console.log('access Token', accessToken);
                //console.log(adminProfile.role);
    
               return res.json({
                    accessToken,
                });

            }
        }
        return res.json({status:'Profile has been updated'});
            }
            
        }

module.exports = adminController;

