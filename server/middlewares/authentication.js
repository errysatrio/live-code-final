require('dotenv').config()
const {User} = require('../models')
module.exports = function authentication (req,res,next){
    try {
        const {verify} = require('../helpers/jwt')
        req.user = verify(token)
        User.findOne({
            where:{username:req.user.username}
        })
        .then(result => {
            if(result){
                next()
            } else {
                next({
                    status:401,
                    message:'Authentication Failed'
                })
            }
        })
        .catch(next)
        next()
    } catch (error) {
        next(err)
    }
}