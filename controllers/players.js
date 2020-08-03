const Player = require('../models/players.js')
const playerData = require('../data/players.js')

//index route
const indexPlayer = async (req, res) => {
  res.json(await Player.find({}))
}

//seed routes
const seedplayer = async (req, res) => {
  res.json(await Player.create({playerData}))
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