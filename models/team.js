const mongoose = require('mongoose')
const {Schema, model} = mongoose

const TeamSchema = new Schema({

      'teamMembers': []

})

const Team = model('team', TeamSchema)
module.exports = Team