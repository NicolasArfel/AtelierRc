const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');

module.exports = () => (req, res, next) => {

    console.log('req.header', req.headers['authorization']);

    const authHeader = req.headers['authorization']
    
    if(authHeader){
    // console.log(req.headers);
    // console.log(authHeader);
    const token = authHeader // && authHeader.split(' ')[1] // car on a 'Bearer token-qqlkhflqhflhqf', 
    // on a donc un espace, l'index 0, c'est bearer et l'index 1, le reste (convention de nommage pour les jwt dans le authorization)
    // console.log(token)
    const verifyToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    if (token == null) return res.sendStatus(401) // ou (!token)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{

        if(err)return res.sendStatus(403);
        if(verifyToken.role !== 'admin') return res.sendStatus(401);

        req.user = user
        next()
    })
    } else {
        return res.status(403).json({ errorMessage: 'no token supplied' })
    }
}