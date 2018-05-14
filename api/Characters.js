var express = require("express");
var mongodb = require("mongodb");
var _ = require("lodash");
var bodyParser = require("body-parser");
var passport = require("passport");
var passportJWT = require("passport-jwt");
var jwt = require('jsonwebtoken');
var app = express();
var router = express.Router();
var mongoose = require("mongoose");
var Character = mongoose.model("Character");
var User = mongoose.model("User");
var bcrypt = require('bcryptjs');
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("JWT");
jwtOptions.secretOrKey = 'LokisBreath-420';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  User.findOne({"_id": jwt_payload.id}, function(err, user) {
    if (err) {
          return next(err, false);
      }
      if (user) {
          return next(null, user);
      } else {
          return next(null, false);
      }
  });
});

app.use(passport.initialize());
passport.use(strategy);
app.use(bodyParser.json());

router.post("/", (req,res) => {
  var newCharacter = new Character({
    name: req.body.name,
    classType: req.body.class,
    characterLevel: req.body.characterLevel,
    health: req.body.health,
    stamina: req.body.stamina,
    factions: req.body.factions,
    race: req.body.race,
    job: req.body.job,
    totalAC: req.body.totalAC,
    wallet: req.body.wallet,
    bank: req.body.bank,
    ship: req.body.ship,
    vit: req.body.vit,
    str: req.body.str,
    dex: req.body.dex,
    int: req.body.int,
    con: req.body.con,
    end: req.body.end,
    att: req.body.att,
    cha: req.body.cha,
    luck: req.body.luck,
    will: req.body.will,
    skills: req.body.skills,
    inventory: req.body.inventory
  })

  newCharacter.save((err, result) => {
    if(err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
})

router.get("/all", passport.authenticate('jwt', { session: false }),(req, res) => {
  Character.find({},function (err, characters) {
    if (err) {
      res.send(err);
    } else {
      res.send(characters);
    }
  })
})

router.put("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
  var characterid = new mongodb.ObjectID(req.params["id"]);
  Character.find({"_id": characterid},function (err, character) {
    if (err) {
        res.status(500).send(err);
    } else {
        var customer = customer[0];
        character.name = req.body.name || character.name;
        character.classType = req.body.classType || character.classType;
        character.characterLevel = req.body.characterLevel || character.characterLevel;
        character.health = req.body.health || character.health;
        character.stamina = req.body.stamina || character.stamina;
        character.factions = req.body.factions || character.factions;
        character.race = req.body.race || character.race;
        character.job = req.body.job || character.job;
        character.totalAC = req.body.totalAC || character.totalAC;
        character.wallet = req.body.wallet || character.wallet;
        character.bank = req.body.bank || character.bank;
        character.ship = req.body.ship || character.ship;
        character.vit = req.body.vit || character.vit;
        character.str = req.body.str || character.str;
        character.dex = req.body.dex || character.dex;
        character.int = req.body.int || character.int;
        character.con = req.body.con || character.con;
        character.end = req.body.end || character.end;
        character.att = req.body.att || character.att;
        character.cha = req.body.cha || character.cha;
        character.luck = req.body.luck || character.luck;
        character.will = req.body.will || character.will;
        character.skills = req.body.skills || character.skills;
        character.inventory = req.body.inventory || character.inventory;

        character.save(function (err, character) {
            if (err) {
              res.status(500).send(err)
            }
            res.send(character);
        });
      }
  });
})

router.delete("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
  var characterid = new mongodb.ObjectID(req.params["id"]);
  Character.find({_id: characterid}).remove().then(() => {
    res.send("success");
  })
})

module.exports = router;
