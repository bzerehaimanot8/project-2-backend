const Player = require('../models/players.js')
const playerData = require('../data/players.js')

//index handler
const indexPlayer = async (req, res) => {
  res.json(await Player.find({}))
}

//seed routes
const seedPlayer = async (req, res) => {
  res.json(await Player.create({}))
}

module.exports = {indexPlayer, seedPlayer}