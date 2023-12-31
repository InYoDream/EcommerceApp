var jwt = require('jsonwebtoken');
const JWT_SECRET = 'abh_first_repo';

const fetchuser = (req,res,next) =>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error : "Please authenicate using a valid Token"});
    }
    try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
    } catch (error) {
        res.status(401).send({error : "Please authenicate using a valid Token"});
    }
}

module.exports = fetchuser;