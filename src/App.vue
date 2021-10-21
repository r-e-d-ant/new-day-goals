<template>
<div>
  <Header />
  <router-view/>
  <Footer />
</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Header, Footer },
}
/*
TODO
1. firebase database
  - settle firebase
2. create goal function
  - get color function
  - add goal button function
  - redirect to home after creating the goal
3. complete goal function
  - change the goal from uncomplete to complete state
4. delete goal function
  - delete goal from the database
5. function to hide uncompleted or completed goals

1.1.# taste using fake api all of them before using firebase
*/
</script>

<style>
@import './assets/style.css';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
