'use strict'

const {Report,Country} = require('../models')

class ControllerReport {
    static getAll(req,res,next){
        Report.findAll()
        .then(result =>{
            res.status(200).json(result)
        })
        .catch(next)
    }
    static add(req,res,next){
        let temp = null
        const {cases, CountryId} = req.body
        Report.create({cases, CountryId})
        .then(result =>{
            temp=result
            console.log('initemp ==========',temp)
            return Country.findOne({where:{id:temp.CountryId}})
        })
        .then(data =>{
            const {name, cases, deaths, recovered, id} = data
            const payload = {
                name, 
                cases:cases+temp.cases, 
                deaths, 
                recovered
            }
            return Country.update(payload, {where:{id}})
        })
        .then(data =>{
            res.status(200).json(temp)
        })
        .catch(err =>{
            console.log(err)
            next(err)
        })
    }
    static delete(req,res,next){
        let id = Number(req.params.id)
        let temp = null
        Report.findOne({where:{id}})
        .then(result1 =>{
            temp = result1
            return Report.destroy({where:{id}})
        })
        .then(result =>{
            temp=result
            console.log('initemp ==========',temp)
            return Country.findOne({where:{id:temp.CountryId}})
        })
        .then(data =>{
            console.log('123')
            const {name, cases, deaths, recovered, id} = data
            const payload = {
                name, 
                cases:cases-temp.cases, 
                deaths, 
                recovered
            }
            return Country.update(payload, {where:{id}})
        })
        .then(data =>{
            res.status(200).json({
                country:data,
                report: 'successfully delete'
            })
        })
        .catch(next)
    }
}

module.exports = ControllerReport