const {indexPlayer, seedPlayer} = require('../controllers/players.js')
const {Router} = require('express')
const router = Router()

router.get('/', indexPlayer)
router.get('/seedPlayer', seedPlayer)

module.exports = router
