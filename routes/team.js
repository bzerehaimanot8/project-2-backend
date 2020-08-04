const {createTeam, addPlayers, destroyPlayers} = require('../controllers/team.js')

const {
  Router
} = require('express')
const router = Router()

router.post('/teams', createTeam)
router.get('/:teamid/:playerid', addPlayers)
router.delete('/:teamid/:playerid', destroyPlayers)

module.exports = router