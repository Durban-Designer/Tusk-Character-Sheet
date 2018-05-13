<template>
  <div id="q-app">
    <div class="main">
    <navbar v-on:logout="logOut" :user="user"></navbar>
    <transition name="fade">
      <router-view v-on:login="login" v-on:register="register" :user="user"/>
    </transition>
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
  created () {
    let vue = this
    vue.user.token = localStorage.getItem('token')
    vue.user.id = localStorage.getItem('userId')
    if (vue.user.token !== null) {
      vue.loggedIn = true
    }
  },
  data: function () {
    return {
      loggedIn: false,
      leadId: '',
      user: {
        id: '',
        token: '',
        admin: false,
        employee: false
      }
    }
  },
  methods: {
    login: function (user) {
      let vue = this
      vue.user.token = user.token
      vue.user.id = user.id
      vue.user.admin = user.admin
      vue.loggedIn = true
      vue.$router.push('/account')
    },
    logOut: function () {
      let vue = this
      vue.user.token = ''
      vue.user.id = ''
      vue.loggedIn = false
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      vue.$router.push('/')
    },
    register: function (user) {
      let vue = this
      vue.user.token = user.data.token
      vue.user.id = user.data.id
      vue.user.admin = user.data.admin
      vue.$router.push('/account')
    }
  }
}
</script>

<style scoped lang="less">
  .fade-enter-active, .fade-leave-active {
    transition: all .25s ease;
    transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
    transform: translateY(20px);
  }
</style>
