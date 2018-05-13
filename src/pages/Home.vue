<template>
  <div class="main">
    <h3>Welcome Back {{user}}</h3>
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
  font-size: 2.5em;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 11;
  font-weight: lighter;
}
button {
  height: 40px;
  text-align: center;
  grid-column-start: 2;
  grid-column-end: 10;
  background-position: left;
  background-image: url('../assets/noise.png');
  border: none;
  box-shadow: 0px 3px 4px black;
  color: white;
  font-size: 1.7em;
  font-weight: lighter;
}
</style>
