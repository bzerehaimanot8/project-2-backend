const mongoose = require('mongoose')
const {Schema, model} = mongoose

const TeamSchema = new Schema({

      'teamMembers': [{type: Schema.Types.ObjectId, ref: 'player'}]

})

const Team = model('team', TeamSchema)
module.exports = Team