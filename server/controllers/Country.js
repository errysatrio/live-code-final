'use strict'

const {Country} = require('../models')

class ControllerCountry {
    static getCountry(req,res,next){
        Country.findAll({order:[['id','asc']]})
        .then(result =>{
            res.status(200).json(result)
        })
        .catch(next)
    }
}

module.exports = ControllerCountry