'use strict'

const { User } = require('../models')
const {sign} = require('../helpers/jwt')

class ControllerUser {
    static login (req,res,next) {
        const {username, password} = req.body
        User.findOne({where:{username}})
        .then(result =>{
            if(password === result.password) {
                const payload = {
                    username: result.name,
                    role: result.role
                }
                let access_token = sign(payload)
                let data = {
                    message: 'successfully logged in',
                    access_token
                }
                res.status(200).json({data})
            } else {
                next ({
                    status: 400,
                    message: 'username/password wrong'
                })
            }
        })
        .catch(next)
    }
}

module.exports = ControllerUser