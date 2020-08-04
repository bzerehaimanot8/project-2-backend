const Team = require('../models/team.js')
const Player = require('../models/players.js')
const seedPlayer = require('../controllers/players.js')

const addPlayers = async (req,res) => {
const team = await Team.findOneById(req.params.teamid)
const player = await Player.findOneById(req.params.playerid)
team.teamMembers.push(player._id)
team.save()
res.json(team)
}

module.exports = addPlayers





