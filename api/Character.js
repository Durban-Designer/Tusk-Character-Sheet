var mongoose = require("mongoose");
var CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  classType: {
    type: String,
    required: true
  },
  characterLevel: {
    type: Number,
    required: true
  },
  health: {
    type: Number,
    required: true
  },
  stamina: {
    type: Number,
    required: true
  },
  factions: {
    type: String,
    required: false,
    default: 'none'
  },
  race: {
    type: String,
    required: true
  },
  job: {
    type: String,
    required: false,
    default: 'unemployed'
  },
  totalAC: {
    type: Number,
    required: true
  },
  wallet: {
    type: Number,
    required: false,
    default: 0
  },
  bank: {
    type: Number,
    required: false,
    default: 0
  },
  ship: {
    type: Number,
    required: false,
    default: 0
  },
  vit: {
    type: Number,
    required: true
  },
  str: {
    type: Number,
    required: true
  },
  dex: {
    type: Number,
    required: true
  },
  int: {
    type: Number,
    required: true
  },
  con: {
    type: Number,
    required: true
  },
  end: {
    type: Number,
    required: true
  },
  att: {
    type: Number,
    required: true
  },
  cha: {
    type: Number,
    required: true
  },
  luck: {
    type: Number,
    required: true
  },
  will: {
    type: Number,
    required: true
  },
  skills: {
    type: Array,
    required: false
  },
  inventory: {
    type: Array,
    required: false
  }
})

var Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;
