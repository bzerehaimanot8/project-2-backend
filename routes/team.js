const addPlayers = require('../controllers/team.js')

const {Router} = require('express')
const router = Router()

router.get('/teamplayer/:teamid/:playerid', addPlayers)

module.exports = router