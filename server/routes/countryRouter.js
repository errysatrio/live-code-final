const router = require('express').Router()
const ControllerCountry = require('../controllers/Country')

router.get('/', ControllerCountry.getCountry)

module.exports = router