const {indexPlayer, seedplayer, createPlayer, updatePlayer, destroyPlayer, PlayerById} = require('../controllers/players.js')
const {Router} = require('express')
const router = Router()

router.get('/', indexPlayer)
router.get('/:id', PlayerById)
router.get('/seedplayer', seedplayer)
router.post('/', createPlayer)
router.put('/:id', updatePlayer)
router.delete('/:id', destroyPlayer)

module.exports = router














// router.get('/:position', indexPlayer)