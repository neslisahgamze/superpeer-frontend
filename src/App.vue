<template>
  <div id="app">
    <people :people=people></people>
  </div>
</template>

<script>
import People from './components/People.vue'

export default {
  name: 'App',
  components: {
    People
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      people: []
    }
  },
  methods: {
    makeRequest(url) {
      fetch(url)
      .then((res) => { return res.json() } )
      .then((data) => {
        this.people = data.results;
      })
    }
  },
  created() {
    const url = process.env.VUE_APP_BACKEND_API_URL;
    this.makeRequest(url);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
