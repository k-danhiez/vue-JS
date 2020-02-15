<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/Mickey-Mouse.jpg">
    <h1>Bienvenu sur mon site de films.</h1>
    <MovieList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MovieList from './components/MovieList.vue'

export default {
  name: 'App',
  components: {
    MovieList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
