<template>
  <div id="q-app">
    <div class="main">
    <navbar v-on:logout="logOut" :logged="logged" :user="user"></navbar>
    <transition name="fade">
      <router-view v-on:login="log" v-on:register="register" :logged="logged" :user="user"/>
    </transition>
    <foot></foot>
  </div>
</div>
</template>

<script>
import navbar from './pages/elements/Navbar'
export default {
  name: 'App',
  components: {
    'navbar': navbar
  },
  data: function () {
    return {
      user: 'hi'
    }
  }
}
</script>

<style>

</style>
