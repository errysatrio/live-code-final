const router = require('express').Router()
const CountryRouter = require('./countryRouter')
const ReportRouter = require('./reportRouter')
const Controller = require('../controllers/controller')

router.use('/login', Controller.login)
router.use('/countries', CountryRouter)
router.use('/reports', ReportRouter)

module.exports = router