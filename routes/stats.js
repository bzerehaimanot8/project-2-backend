const {indexStat, seedStat} = require('../controllers/stats.js')
const {Router} = require('express')
const router = Router()

router.get('/', indexStat)
router.get('/seedStat', seedStat)

module.exports = router