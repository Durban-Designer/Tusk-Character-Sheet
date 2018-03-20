<template>
  <div>
    <h1>Tusk Mk1</h1>
    <h3>Welcome back {{user}}</h3>
    <button v-on:click="$router.push('/characters')">Characters</button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: ['user']
}
</script>

<style scoped lang="less">
  h3 {
    color: #fff;
  }
</style>
