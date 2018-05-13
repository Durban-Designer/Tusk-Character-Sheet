<template>
  <div class="main">
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
.main {
  background-image: url('../assets/noise2.jpg');
  height: 100%;
  width: 100%;
  background-repeat: repeat;
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  position: fixed;
}
h3 {
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 11;
}
button {
  text-align: center;
  grid-column-start: 2;
  grid-column-end: 10;
  background-position: left;
  background-image: url('../assets/metal2.jpg');
  border: none;
  box-shadow: 0px 3px 4px black;
  color: #444;
  font-size: 1.7em;
}
</style>
