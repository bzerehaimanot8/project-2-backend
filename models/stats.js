const mongoose = require('mongoose')
const {Schema, model} = mongoose

const StatSchema = new Schema({

      championships: {type: Number, required: true},
      allStarCount: {type: Number, required: true},
            ppg: {type: Number, required: true},
            apg: {type: Number, required: true},
            rpg: {type: Number, required: true}

})

const Stat = model('stat', StatSchema)
module.exports = Stat