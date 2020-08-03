const mongoose = require('mongoose')
const {Schema, model} = mongoose

const playerSchema = new Schema({

      fullName: {type: String, required: true},
      position: {type: String, required: true},
      height: {type: String, required: true},
      yearsPro: {type: Number, required: true},
      careerStats: [{type: Schema.Types.ObjectId, ref: 'stat'}],
          from: {type: String, required: true},
      imageURL: {type: String, required: true}
})

const Player = model('player', playerSchema)
module.exports = Player