const Stat = require('../models/stats.js')
const statData = require('../data/stats.js')

//index handler
const indexStat = async (req, res) => {
  res.json(await Stat.find({}))
}

//seed routes
const seedStat = async (req, res) => {
  res.json(await Stat.create({}))
}

module.exports = {indexStat, seedStat}