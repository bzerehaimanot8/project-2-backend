const Stat = require('../models/stats.js')
const statData = require('../data/stats.js')

//index handler
const indexStat = async (req, res) => {
  res.json(await Stat.find({}))
}

//seed routes
const seedstat = async (req, res) => {
  res.json(await Stat.create({}))
}


//create route
const createStat = async (req, res) => {
  res.json(await Stat.create(req.body))
}

//update
const updateStat = async (req, res) => {
  res.json(await Stat.findByIdAndUpdate(req.params.id, req.body))
}

//destroy
const destroyStat = async (req, res) => {
  res.json(await Stat.findByIdAndDelete(req.params.id))
}

module.exports = {indexStat, seedstat, createStat, updateStat, destroyStat}