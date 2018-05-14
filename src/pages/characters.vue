<template>
  <div class="main">
    <div class="character" v-if="modal==='character'">
      <h4>Name:</h4><span>{{activeCharacter.name}}</span>
      <h4>Class:</h4><span>{{activeCharacter.classType}}</span>
      <h4>Level:</h4><span>{{activeCharacter.characterLevel}}</span>
      <h4>Health:</h4><span>{{activeCharacter.health}}</span>
      <h4>Stamina:</h4><span>{{activeCharacter.stamina}}</span>
      <h4>Factions:</h4><span>{{activeCharacter.factions}}</span>
      <h4>Race:</h4><span>{{activeCharacter.race}}</span>
      <h4>Job:</h4><span>{{activeCharacter.job}}</span>
      <h4>Armor Class:</h4><span>{{activeCharacter.totalAC}}</span>
      <h4>Wallet:</h4><span>{{activeCharacter.wallet}}</span>
      <h4>Bank:</h4><span>{{activeCharacter.bank}}</span>
      <h4>Ship:</h4><span>{{activeCharacter.ship}}</span>
      <h4>Vitality:</h4><span>{{activeCharacter.vit}}</span>
      <h4>Strength:</h4><span>{{activeCharacter.str}}</span>
      <h4>Dexterity:</h4><span>{{activeCharacter.dex}}</span>
      <h4>Intelligence:</h4><span>{{activeCharacter.int}}</span>
      <h4>Constitution</h4><span>{{activeCharacter.con}}</span>
      <h4>Endurance:</h4><span>{{activeCharacter.end}}</span>
      <h4>Attenuation:</h4><span>{{activeCharacter.att}}</span>
      <h4>Charisma:</h4><span>{{activeCharacter.cha}}</span>
      <h4>Luck:</h4><span>{{activeCharacter.luck}}</span>
      <h4>Willpower:</h4><span>{{activeCharacter.will}}</span>
      <h3 class="skillsHeader">Skills:</h3>
      <div class="skills">
        <div class="skill" v-for="skill in activeCharacter.skills" v-bind:key="skill.id">
          <h4 v-on:click="skill.toggled=!skill.toggled" v-if="!skill.toggled">{{skill.name}}</h4>
          <div class="skillDetails" v-if="skill.toggled">
            <h4 class="skillName">{{skill.name}}</h4>
            <p class="skillDescription"> {{skill.description}}</p>
            <button class="hide" v-on:click="skill.toggled=!skill.toggled">Hide Skill</button>
          </div>
        </div>
      </div>
      <h3 class="itemsHeader">Items:</h3>
      <div class="items">
        <div class="item" v-for="item in activeCharacter.inventory" v-bind:key="item.id">
          <h4 v-on:click="item.toggled=!item.toggled" v-if="!item.toggled">{{item.name}}</h4>
          <div class="itemDetails" v-if="item.toggled">
            <h4 class="itemName">{{item.name}}</h4>
            <p class="itemDescription">{{item.description}}</p>
            <button class="hide" v-on:click="item.toggled=!item.toggled">Hide Item</button>
          </div>
        </div>
      </div>
      <button class="edit" v-on:click="modal='edit'">Edit Character</button>
      <button class="back" v-on:click="clearCharacter(); populateCharacters(); modal=''">Back</button>
    </div>
    <div class="editModal" v-else-if="modal==='edit'">
      <h4>Name:</h4><input class="" v-model="activeCharacter.name" placeholder="name"/>
      <h4>Class:</h4><input class="" v-model="activeCharacter.classType" placeholder="class type" />
      <h4>Level:</h4><input class="" v-model="activeCharacter.characterLevel" placeholder="characer level" type="number" />
      <h4>Health:</h4><input class="" v-model="activeCharacter.health" placeholder="health" type="number" />
      <h4>Stamina:</h4><input class="" v-model="activeCharacter.stamina" placeholder="stamina" type="number" />
      <h4>Factions:</h4><input class="" v-model="activeCharacter.factions" placeholder="factions" />
      <h4>Race:</h4><input class="" v-model="activeCharacter.race" placeholder="race" />
      <h4>Job:</h4><input class="" v-model="activeCharacter.job" placeholder="job" />
      <h4>Armor Class:</h4><input class="" v-model="activeCharacter.totalAC" placeholder="total armor class" type="number" />
      <h4>Wallet:</h4><input class="" v-model="activeCharacter.wallet" placeholder="personal wallet" type="number" />
      <h4>Bank:</h4><input class="" v-model="activeCharacter.bank" placeholder="bank" type="number" />
      <h4>Ship:</h4><input class="" v-model="activeCharacter.ship" placeholder="ship charge" type="number" />
      <h4>Vitality:</h4><input class="" v-model="activeCharacter.vit" placeholder="vitality" type="number" />
      <h4>Strength:</h4><input class="" v-model="activeCharacter.str" placeholder="strength" type="number" />
      <h4>Dexterity:</h4><input class="" v-model="activeCharacter.dex" placeholder="dexterity" type="number" />
      <h4>Intelligence:</h4><input class="" v-model="activeCharacter.int" placeholder="intelligence" type="number" />
      <h4>Constitution</h4><input class="" v-model="activeCharacter.con" placeholder="constitution" type="number" />
      <h4>Endurance:</h4><input class="" v-model="activeCharacter.end" placeholder="endurance" type="number" />
      <h4>Attenuation:</h4><input class="" v-model="activeCharacter.att" placeholder="attenuation" type="number" />
      <h4>Charisma:</h4><input class="" v-model="activeCharacter.cha" placeholder="charisma" type="number" />
      <h4>Luck:</h4><input class="" v-model="activeCharacter.luck" placeholder="luck" type="number" />
      <h4>Willpower:</h4><input class="" v-model="activeCharacter.will" placeholder="willpower" type="number" />
      <h3 class="skillsHeader">Skills:</h3>
      <div class="skillsEdit">
        <div class="skill" v-for="skill in activeCharacter.skills" v-bind:key="skill.id">
          <input class="skillName" v-model="skill.name" placeholder="skill name" />
          <input class="skillDescription" v-model="skill.description" placeholder="skill description" />
          <button class="skillDelete" v-on:click="deleteSkill(skill)">Delete Skill</button>
        </div>
      </div>
      <h3 class="itemsHeader">Items:</h3>
      <div class="itemsEdit">
        <div class="item" v-for="item in activeCharacter.inventory" v-bind:key="item.id">
          <input class="itemName" v-model="item.name" placeholder="item name" />
          <input class="itemDescription" v-model="item.description" placeholder="item description" />
          <button class="itemDelete" v-on:click="deleteItem(item)">Delete Item</button>
        </div>
      </div>
      <button class="newSkill" v-on:click="newSkill">Add New Blank Skill</button>
      <button class="newItem" v-on:click="newItem">Add New Blank Item</button>
      <button class="update" v-on:click="updateCharacter">Update Character</button>
      <button class="delete" v-on:click="modal='sure'">Delete Character</button>
      <button v-on:click="clearCharacter(); populateCharacters(); modal=''">Back</button>
    </div>
    <div v-else-if="modal==='sure'">
      <h3>Are you sure you want to delete {{activeCharacter.name}}? (this is permanent!!)</h3>
      <button v-on:click="deleteCharacter">Yes</button>
      <button v-on:click="modal='edit'">no</button>
    </div>
    <div class="create" v-else-if="modal==='creation'">
      <h4>Name:</h4><input class="" v-model="activeCharacter.name" placeholder="name"/>
      <h4>Class:</h4><input class="" v-model="activeCharacter.classType" placeholder="class type" />
      <h4>Level:</h4><input class="" v-model="activeCharacter.characterLevel" placeholder="characer level" type="number" />
      <h4>Health:</h4><input class="" v-model="activeCharacter.health" placeholder="health" type="number" />
      <h4>Stamina:</h4><input class="" v-model="activeCharacter.stamina" placeholder="stamina" type="number" />
      <h4>Factions:</h4><input class="" v-model="activeCharacter.factions" placeholder="factions" />
      <h4>Race:</h4><input class="" v-model="activeCharacter.race" placeholder="race" />
      <h4>Job:</h4><input class="" v-model="activeCharacter.job" placeholder="job" />
      <h4>Armor Class:</h4><input class="" v-model="activeCharacter.totalAC" placeholder="total armor class" type="number" />
      <h4>Wallet:</h4><input class="" v-model="activeCharacter.wallet" placeholder="personal wallet" type="number" />
      <h4>Bank:</h4><input class="" v-model="activeCharacter.bank" placeholder="bank" type="number" />
      <h4>Ship:</h4><input class="" v-model="activeCharacter.ship" placeholder="ship charge" type="number" />
      <h4>Vitality:</h4><input class="" v-model="activeCharacter.vit" placeholder="vitality" type="number" />
      <h4>Strength:</h4><input class="" v-model="activeCharacter.str" placeholder="strength" type="number" />
      <h4>Dexterity:</h4><input class="" v-model="activeCharacter.dex" placeholder="dexterity" type="number" />
      <h4>Intelligence:</h4><input class="" v-model="activeCharacter.int" placeholder="intelligence" type="number" />
      <h4>Constitution</h4><input class="" v-model="activeCharacter.con" placeholder="constitution" type="number" />
      <h4>Endurance:</h4><input class="" v-model="activeCharacter.end" placeholder="endurance" type="number" />
      <h4>Attenuation:</h4><input class="" v-model="activeCharacter.att" placeholder="attenuation" type="number" />
      <h4>Charisma:</h4><input class="" v-model="activeCharacter.cha" placeholder="charisma" type="number" />
      <h4>Luck:</h4><input class="" v-model="activeCharacter.luck" placeholder="luck" type="number" />
      <h4>Willpower:</h4><input class="" v-model="activeCharacter.will" placeholder="willpower" type="number" />
      <h3 class="skillsHeader">Skills:</h3>
      <div class="skillsEdit">
        <div class="skill" v-for="skill in activeCharacter.skills" v-bind:key="skill.id">
          <input class="skillName" v-model="skill.name" placeholder="skill name" />
          <input class="skillDescription" v-model="skill.description" placeholder="skill description" />
          <button class="skillDelete" v-on:click="deleteSkill(skill)">Delete Skill</button>
        </div>
      </div>
      <h3 class="itemsHeader">Items:</h3>
      <div class="itemsEdit">
        <div class="item" v-for="item in activeCharacter.inventory" v-bind:key="item.id">
          <input class="itemName" v-model="item.name" placeholder="item name" />
          <input class="itemDescription" v-model="item.description" placeholder="item description" />
          <button class="itemDelete" v-on:click="deleteItem(item)">Delete Item</button>
        </div>
      </div>
      <button class="newSkill" v-on:click="newSkill">Add New Blank Skill</button>
      <button class="newItem" v-on:click="newItem">Add New Blank Item</button>
      <button class="newChar" v-on:click="makeCharacter">Make New Character</button>
      <button class="back" v-on:click="clearCharacter(); populateCharacters(); modal=''">Back</button>
    </div>
    <div class="listView" v-else>
      <h1>Characters</h1>
      <h2 v-for="character in characters" v-on:click="viewCharacter(character)" v-bind:key="character.id">{{character.name}}</h2>
      <button class="new" v-on:click="modal='creation'">Make a New Character</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Characters',
  props: ['user'],
  data () {
    return {
      modal: '',
      characters: [],
      activeCharacter: {
        id: '',
        name: '',
        classType: '',
        characterLevel: '',
        health: '',
        stamina: '',
        factions: '',
        race: '',
        job: '',
        totalAC: '',
        wallet: '',
        bank: '',
        ship: '',
        vit: '',
        str: '',
        dex: '',
        int: '',
        con: '',
        end: '',
        att: '',
        cha: '',
        luck: '',
        will: '',
        skills: [],
        inventory: []
      }
    }
  },
  created () {
    let vue = this
    vue.populateCharacters()
  },
  methods: {
    populateCharacters () {
      let vue = this
      vue.characters = []
      axios.get('http://localhost:81/characters/all', {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(response => {
          vue.characters = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    viewCharacter (character) {
      let vue = this
      vue.activeCharacter.id = character._id
      vue.activeCharacter.name = character.name
      vue.activeCharacter.classType = character.classType
      vue.activeCharacter.characterLevel = character.characterLevel
      vue.activeCharacter.health = character.health
      vue.activeCharacter.stamina = character.stamina
      vue.activeCharacter.factions = character.factions
      vue.activeCharacter.race = character.race
      vue.activeCharacter.job = character.job
      vue.activeCharacter.totalAC = character.totalAC
      vue.activeCharacter.wallet = character.wallet
      vue.activeCharacter.bank = character.bank
      vue.activeCharacter.ship = character.ship
      vue.activeCharacter.vit = character.vit
      vue.activeCharacter.str = character.str
      vue.activeCharacter.dex = character.dex
      vue.activeCharacter.int = character.int
      vue.activeCharacter.con = character.con
      vue.activeCharacter.end = character.end
      vue.activeCharacter.att = character.att
      vue.activeCharacter.cha = character.cha
      vue.activeCharacter.luck = character.luck
      vue.activeCharacter.will = character.will
      vue.activeCharacter.skills = character.skills
      vue.activeCharacter.inventory = character.inventory
      vue.modal = 'character'
    },
    makeCharacter () {
      let vue = this
      axios.post('http://localhost:81/characters', {
        name: vue.activeCharacter.name,
        classType: vue.activeCharacter.classType,
        characterLevel: vue.activeCharacter.characterLevel,
        health: vue.activeCharacter.health,
        stamina: vue.activeCharacter.stamina,
        factions: vue.activeCharacter.factions,
        race: vue.activeCharacter.race,
        job: vue.activeCharacter.job,
        totalAC: vue.activeCharacter.totalAC,
        wallet: vue.activeCharacter.wallet,
        bank: vue.activeCharacter.bank,
        ship: vue.activeCharacter.ship,
        vit: vue.activeCharacter.vit,
        str: vue.activeCharacter.str,
        dex: vue.activeCharacter.dex,
        int: vue.activeCharacter.int,
        con: vue.activeCharacter.con,
        end: vue.activeCharacter.end,
        att: vue.activeCharacter.att,
        cha: vue.activeCharacter.cha,
        luck: vue.activeCharacter.luck,
        will: vue.activeCharacter.will,
        skills: vue.activeCharacter.skills,
        inventory: vue.activeCharacter.inventory
      })
        .then(result => {
          vue.modal = 'character'
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCharacter () {
      let vue = this
      axios.put('http://localhost:81/characters/' + vue.activeCharacter.id, {
        name: vue.activeCharacter.name,
        classType: vue.activeCharacter.classType,
        characterLevel: vue.activeCharacter.characterLevel,
        health: vue.activeCharacter.health,
        stamina: vue.activeCharacter.stamina,
        factions: vue.activeCharacter.factions,
        race: vue.activeCharacter.race,
        job: vue.activeCharacter.job,
        totalAC: vue.activeCharacter.totalAC,
        wallet: vue.activeCharacter.wallet,
        bank: vue.activeCharacter.bank,
        ship: vue.activeCharacter.ship,
        vit: vue.activeCharacter.vit,
        str: vue.activeCharacter.str,
        dex: vue.activeCharacter.dex,
        int: vue.activeCharacter.int,
        con: vue.activeCharacter.con,
        end: vue.activeCharacter.end,
        att: vue.activeCharacter.att,
        cha: vue.activeCharacter.cha,
        luck: vue.activeCharacter.luck,
        will: vue.activeCharacter.will,
        skills: vue.activeCharacter.skills,
        inventory: vue.activeCharacter.inventory
      }, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(result => {
          vue.modal = 'character'
        })
        .catch(err => {
          console.log(err)
        })
    },
    clearCharacter () {
      let vue = this
      vue.activeCharacter.name = ''
      vue.activeCharacter.classType = ''
      vue.activeCharacter.characterLevel = ''
      vue.activeCharacter.health = ''
      vue.activeCharacter.stamina = ''
      vue.activeCharacter.factions = ''
      vue.activeCharacter.race = ''
      vue.activeCharacter.job = ''
      vue.activeCharacter.totalAC = ''
      vue.activeCharacter.wallet = ''
      vue.activeCharacter.bank = ''
      vue.activeCharacter.ship = ''
      vue.activeCharacter.vit = ''
      vue.activeCharacter.str = ''
      vue.activeCharacter.dex = ''
      vue.activeCharacter.int = ''
      vue.activeCharacter.con = ''
      vue.activeCharacter.end = ''
      vue.activeCharacter.att = ''
      vue.activeCharacter.cha = ''
      vue.activeCharacter.luck = ''
      vue.activeCharacter.will = ''
      vue.activeCharacter.skills = []
      vue.activeCharacter.inventory = []
    },
    deleteCharacter () {
      let vue = this
      axios.delete('http://localhost:81/characters/' + vue.activeCharacter.id, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(result => {
          vue.clearCharacter()
          vue.populateCharacters()
          vue.modal = ''
        })
        .catch(err => {
          vue.modal = 'edit'
          console.log(err)
        })
    },
    newSkill () {
      let vue = this
      vue.activeCharacter.skills.push({name: '', description: '', toggled: false})
    },
    newItem () {
      let vue = this
      vue.activeCharacter.inventory.push({name: '', description: '', weight: 0, toggled: false})
    },
    deleteSkill (skill) {
      let vue = this
      let position = vue.activeCharacter.skills.indexOf(skill)
      vue.activeCharacter.skills.splice(position, 1)
    },
    deleteItem (item) {
      let vue = this
      let position = vue.activeCharacter.inventory.indexOf(item)
      vue.activeCharacter.inventory.splice(position, 1)
    }
  }
}
</script>

<style scoped lang="less">
.main {
  background-image: url('../assets/noise2.jpg');
  height: 300%;
  width: 100%;
  background-repeat: repeat;
  margin-top: 80px;
  position: absolute;
}
.listView {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
}
.character {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(40, 2em);
}
h1 {
  font-size: 3em;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 11;
  font-weight: lighter;
}
.skills {
  grid-row-start: 24;
  grid-row-end: 31;
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(20, 1em);
}
.items {
  grid-row-start: 33;
  grid-row-end: 40;
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(20, 1em);
}
.skillsHeader {
  text-align: center;
  grid-row-start: 23;
  grid-row-end: 24;
  grid-column-start: 1;
  grid-column-end: 3;
}
.itemsHeader {
  text-align: center;
  grid-row-start: 32;
  grid-row-end: 33;
  grid-column-start: 1;
  grid-column-end: 3;
}
.newChar {
  position: absolute;
  bottom: 40px;
  height: 1.5em;
  line-height: 1.4em;
  width: 100%;
}
.edit {
  position: absolute;
  bottom: 40px;
  height: 1.5em;
  line-height: 1.4em;
  width: 100%;
}
.back {
  position: absolute;
  bottom: 10px;
  height: 1.5em;
  line-height: 1.4em;
  width: 100%;
}
.new {
  height: 40px;
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background-position: left;
  background-image: url('../assets/noise.png');
  border: none;
  box-shadow: 0px 3px 4px black;
  color: white;
  font-size: 1.7em;
  font-weight: lighter;
}
</style>
