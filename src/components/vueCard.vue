<template>
  <div>
      <div class="card" style="width: 18rem;" >
        <div class="card-body">
          <h5  class="card-title">{{city.il.toUpperCase().trim()}} / {{city.ilce}}<i @click="$store.dispatch('deleteFromFavourite', city.id)" class="fas fa-times"></i></h5>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Brand</th>
                <th scope="col">Gasoline</th>
                <th scope="col">Diesel</th>
                <th scope="col">LPG</th>
              </tr>
            </thead>
            <tbody v-if="gasoline">
              <tr v-for="gasolineResults of gasoline.result" :key="gasolineResults.marka">
                <td>{{ gasolineResults.marka }}</td>
                <td>{{ gasolineResults.benzin }}<p v-if="gasolineResults.benzin==null">Null</p></td>
                <span style="position:absolute; left:60%;" v-for="dieselResults of diesel.result" :key="dieselResults"><td v-if="dieselResults.marka==gasolineResults.marka">{{dieselResults.dizel}}<p v-if="dieselResults.dizel==null">Null</p></td></span>
                <span style="position:absolute; float:left;" v-if="lpg.success==true"><td v-for="lpgResults of lpg.result" :key="lpgResults.marka==gasolineResults.marka">{{ lpgResults.lpg }}<p >Null</p></td></span>
                <td v-else>Null </td>
              </tr> 
            </tbody>
            <tbody v-else-if="diesel">
              <tr v-for="dieselResults of diesel.result" :key="dieselResults.marka">
                <td>{{ dieselResults.marka }}</td>
                <td>{{ dieselResults.dizel }}<p v-if="dieselResults.dizel==null">Null</p></td>
                <span style="position:absolute; left:60%;" v-for="gasolineResults of gasoline.result" :key="gasolineResults"><td v-if="gasolineResults.marka==dieselResults.marka">{{gasolineResults.benzin}}<p v-if="gasolineResults.benzin==null">Null</p></td></span>
                <span style="position:absolute; float:left;" v-if="lpg.success==true"><td v-for="lpgResults of lpg.result" :key="lpgResults.marka==gasolineResults.marka">{{ lpgResults.lpg }}<p >Null</p></td></span>
                <td v-else>Null </td>
              </tr> 
            </tbody>
          </table>
        </div>
      </div>
  </div>
  <p v-if="gasoline" hidden>{{$store.dispatch('updateLastUpdated',gasoline.lastupdate) }}</p>
  <p v-else-if="diesel" hidden>{{ $store.dispatch('updateLastUpdated',diesel.lastupdate)}}</p>
</template>

<script>
import axios from 'axios'
export default {
  name: 'vueCard',
  props: {
    // city: Object,
    city: {
    type: Object,
    required: true
    }
  },
  data() {
    return {
      gasoline: null,
      diesel: null,
      lpg: null,
    }
  },
  created() { 
    
    this.getData();  
    this.timer = setInterval(this.getData, this.$store.getters.getTimer); 
    // console.log(this.$store.getters.getTimer) 
  }, 
  watch: {
    '$store.getters.getTimer': function() {
    clearInterval(this.timer);  
    this.timer = setInterval(this.getData, this.$store.getters.getTimer); 
    // console.log(this.$store.getters.getTimer)
    }
  },
  methods: {getData() {
      axios.get(`https://api.collectapi.com/gasPrice/turkeyGasoline?district=${this.city.ilce}&city=${this.city.il}`, {
      headers: {
          'Content-type': `application/json`,
          'authorization': `apikey 11B4ibhvR1zVfFlaOqYrEqM:08ULglcn7Bu0cT8J9sILZ5`,
        }
    }).then(gasolineRes => {
      this.gasoline = gasolineRes.data
      console.log(this.gasoline)
    })
    axios.get(`https://api.collectapi.com/gasPrice/turkeyDiesel?district=${this.city.ilce}&city=${this.city.il}`, {
      headers: {
          'Content-type': `application/json`,
          'authorization': `apikey 11B4ibhvR1zVfFlaOqYrEqM:08ULglcn7Bu0cT8J9sILZ5`,
        }
    }).then(dieselRes => {
      this.diesel = dieselRes.data
      console.log(this.diesel)
    })
     axios.get(`https://api.collectapi.com/gasPrice/turkeyLpg?city=${this.city.il}`, {
      headers: {
          'content-type': `application/json`,
          'authorization': `apikey 11B4ibhvR1zVfFlaOqYrEqM:08ULglcn7Bu0cT8J9sILZ5`,
        }
    }).then(lpgRes => {
      this.lpg = lpgRes.data
      console.log(this.lpg)
    })
  },
  }
}

</script>

<style scoped>
.fas {
  color: #92959E;
  float:right;
}
.card {
position: relative;
float: left;
margin:4%;
width: 446px;
height: 404px;
left: 0px;
top: 0px;

background: #FFFFFF;
border-radius: 24px;
}
.card-title {
  color: #15192C;
}
</style>