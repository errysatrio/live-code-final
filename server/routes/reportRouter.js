const router = require('express').Router()
const ControllerReport = require('../controllers/Report')

router.get('/', ControllerReport.getAll)
router.post('/', ControllerReport.add)
router.delete('/:id', ControllerReport.delete)


module.exports = router