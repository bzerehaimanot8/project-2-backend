const mongoose = require('mongoose')
const {Schema, model} = mongoose

const playerSchema = new Schema({

      fullName: {type: String, required: true},
      position: {type: String, required: true},
        height: {type: String, required: true},
      yearsPro: {type: Number, required: true},
          from: {type: String, required: true},
      imageURL: {type: String, required: true},
 championships: {type: Number, required: true},
  allStarCount: {type: Number, required: true},
           ppg: {type: Number, required: true},
           apg: {type: Number, required: true},
           rpg: {type: Number, required: true}
})

const Player = model('player', playerSchema)
module.exports = Player
