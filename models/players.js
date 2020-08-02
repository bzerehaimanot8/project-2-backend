const mongoose = require('mongoose')
const {Schema, model} = mongoose

const pgSchema = new Schema({

      fullName: {type: String, required: true},
      position: {type: String, required: true},
      height: {type: String, required: true},
      yearsPro: {type: Number, required: true},
      careerStats: [{type: Schema.Types.ObjectId, ref: 'stat'}],
          from: {type: String, required: true},
      imageURL: {type: String, required: true}
})

const sgSchema = new Schema({

      fullName: {type: String, required: true},
      position: {type: String, required: true},
      height: {type: String, required: true},
      yearsPro: {type: Number, required: true},
      careerStats: [{type: Schema.Types.ObjectId, ref: 'stat'}],
          from: {type: String, required: true},
      imageURL: {type: String, required: true}
      
})

const sfSchema = new Schema({

      fullName: {type: String, required: true},
      position: {type: String, required: true},
      height: {type: String, required: true},
      yearsPro: {type: Number, required: true},
      careerStats: [{type: Schema.Types.ObjectId, ref: 'stat'}],
          from: {type: String, required: true},
      imageURL: {type: String, required: true}
})

const pfSchema = new Schema({

       fullName: {type: String, required: true},
      position: {type: String, required: true},
      height: {type: String, required: true},
      yearsPro: {type: Number, required: true},
      careerStats: [{type: Schema.Types.ObjectId, ref: 'stat'}],
          from: {type: String, required: true},
      imageURL: {type: String, required: true}
})

const cSchema = new Schema({

      fullName: {type: String, required: true},
      position: {type: String, required: true},
      height: {type: String, required: true},
      yearsPro: {type: Number, required: true},
      careerStats: [{type: Schema.Types.ObjectId, ref: 'stat'}],
          from: {type: String, required: true},
      imageURL: {type: String, required: true}
})


const Pg = model('pg', pgSchema)
const Sg = model('sg', sgSchema)
const Sf = model('sf', sfSchema)
const Pf = model('pf', pfSchema)
const C = model('c', cSchema)

module.exports = { Pg, Sg, Sf, Pf, C } 