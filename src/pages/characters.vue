<template>
  <div>
    <div v-if="modal==='character'">
      <button v-on:click="clearCharacter; modal=''">Back</button>
    </div>
    <div v-else>
      <h1>Characters</h1>
      <h2 v-for="character in characters" v-on:click="viewCharacter(character)" v-bind:key="character.id">{{character.name}}</h2>
      <button v-on:click="makeCharacter">Make a New Character</button>
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
        skills: '',
        inventory: ''
      }
    }
  },
  created () {
    let vue = this
    axios.get('http://localhost:81/characters/all', {headers: { 'Authorization': 'JWT ' + vue.user.token }})
      .then(response => {
        vue.characters = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    viewCharacter (character) {
      let vue = this
      vue.activeCharacter.name = character.name
      vue.activeCharacter.classType = character.class
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
    },
    clearCharacter () {
      let vue = this
      vue.activeCharacters.name = ''
      vue.activeCharacters.classType = ''
      vue.activeCharacters.characterLevel = ''
      vue.activeCharacters.health = ''
      vue.activeCharacters.stamina = ''
      vue.activeCharacters.factions = ''
      vue.activeCharacters.race = ''
      vue.activeCharacters.job = ''
      vue.activeCharacters.totalAC = ''
      vue.activeCharacters.wallet = ''
      vue.activeCharacters.bank = ''
      vue.activeCharacters.ship = ''
      vue.activeCharacters.vit = ''
      vue.activeCharacters.str = ''
      vue.activeCharacters.dex = ''
      vue.activeCharacters.int = ''
      vue.activeCharacters.con = ''
      vue.activeCharacters.end = ''
      vue.activeCharacters.att = ''
      vue.activeCharacters.cha = ''
      vue.activeCharacters.luck = ''
      vue.activeCharacters.will = ''
      vue.activeCharacters.skills = ''
      vue.activeCharacters.inventory = ''
    }
  }
}
</script>

<style scoped lang="less">
</style>
