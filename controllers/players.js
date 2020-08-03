const Player = require('../models/players.js')
const playerData = require('../data/players.js')

//index route
const indexPlayer = async (req, res) => {

const allPlayers = await Player.find({position: req.params.position})

const allPlayers1 = await allPlayers.populate({path: 'careerStats'})

  res.json(allPlayers1)
}

//seed routes
const seedplayer = async (req, res) => {
  try {
res.json(await Player.create(playerData))
}
catch(error){console.log(error);
res.send(error)
}
}

//create route
const createPlayer = async (req, res) => {
  res.json(await Player.create(req.body))
}

//update
const updatePlayer = async (req, res) => {
  res.json(await Player.findByIdAndUpdate(req.params.id, req.body))
}

//destroy
const destroyPlayer = async (req, res) => {
  res.json(await Player.findByIdAndDelete(req.params.id))
}

module.exports = {indexPlayer, seedplayer, createPlayer, updatePlayer, destroyPlayer}