<template>
  <div id="q-app">
    <router-view :user="user"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      user: 'hi'
    }
  }
}
</script>

<style>
</style>
