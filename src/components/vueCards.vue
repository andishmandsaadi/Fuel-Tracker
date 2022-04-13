<template>
  <!-- <div v-for="city in cities" :key="city.il">
      <vueCard :city="city" />
  </div> 
  <h2 v-if="$store.state.favorites.length">Favorites</h2> -->
    <div v-for="city in $store.state.favorites" :key="city.il">
      <vueCard :city="city" />
</div>
</template>

<script>
import vueCard from './vueCard'
import favouriteCities from '@/data/favouriteCities.js'
import { ref } from '@vue/reactivity'
export default {
name: 'vueCards',
components: {
    vueCard
},
setup() {
    const cities = ref(favouriteCities)
    return { cities }
  },
// props: {
//     cities: Array
// }
}
</script>

<style>

</style>