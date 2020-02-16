<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
  <div id="app">
    <v-app>
      <div class="image">
        <img alt="Vue logo" src="./assets/Mickey-Mouse.jpg" height="613px" width="562px">
      </div>
      <h1>Bienvenue sur mon site de films.</h1>
    <MovieList msg="Welcome to Your Vue.js App"/>
    </v-app>
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
.image {
  display: flex;
    align-items: center;
    justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
