const Team = require('../models/team.js')
const Player = require('../models/players.js')
const seedPlayer = require('../controllers/players.js')


//create route
const createTeam = async (req, res) => {
  res.json(await Team.create(req.body))
}



const addPlayers = async (req,res) => {
const team = await Team.findById(req.params.teamid)
const player = await Player.findById(req.params.playerid)
team.teamMembers.push(player._id)
team.save()
res.json(team)
}

const destroyPlayers = async (req, res) => {
const team1 = await Team.findById(req.params.teamid)
const player1 = await Player.findById(req.params.playerid)
team1.teamMembers.splice(player1._id)
team1.save()
res.json(team1)

}

module.exports = {createTeam, addPlayers, destroyPlayers}





