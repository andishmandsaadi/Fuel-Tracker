<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <vueHeader />
  <refreshRate />
  <offCanvas @add-city="newCity"/>
  <div class="body">
    <vueCards :cities="favorites" />
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
//import the global store object from Vuex
import {useStore} from 'vuex'
// declare the store variable
const store = useStore();

// const getCities = computed(() => {
//   return store.getters.getCities
// })

const favorites = computed(() => {
  return store.state.favorites
})

onMounted(() => {
// dispatch the fetchUsers action which commits a mutation to update the state
  store.dispatch("fetchCities");
})
</script>
<script>
import vueHeader from './components/vueHeader'
import offCanvas from './components/offCanvas'
import vueCards from './components/vueCards'
import refreshRate from './components/refreshRate'

export default {
  name: 'App',
  components: {
    vueHeader,
    offCanvas,
    vueCards,
  },
  methods: {
    async newCity(city){
      const res = await fetch('http://localhost:5000/favourites',{
        method:`POST`,
        headers: {
          'Content-type': `application/json`,
        },
        body: JSON.stringify(city),
      })
      const data= await res.json()

      this.favorites =[...this.favorites, data]
    },
  }
  // data() {
  //   return {
  //     cities: []
  //   }
  // },
  // created() {
  //   this.cities = [
  //     {
  //       il: 'samsdsun',
  //       ilce: 'atakum'
  //     },
  //     {
  //       il: 'ankara',
  //       ilce: 'bala'
  //     }
  //   ]
  // }
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
<style  scoped>

</style>
