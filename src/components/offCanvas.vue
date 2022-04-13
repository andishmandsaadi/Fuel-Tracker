<template>
 <button class="btn btn-primary" id="addtracker" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i id="circle" class="fa-regular fa-circle" style="font-size:70px" aria-hidden="true"></i><i id="plus" class="fa-regular fa-circle fa-plus" style="font-size:70px" aria-hidden="true"></i><br>Add Tracker</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Add Tracker</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <form  class="row g-3">
      <h5>City:</h5>
    <select v-model="iller" name="il" class="form-select" aria-label="Default select example" >
        <option disabled value="">Select city</option>
        <option v-for="district of districts" :key="district.plaka" :value="district">{{ district.il }}</option>
    </select>
    <h5>District:</h5>
    <select v-model="ilceler" name="ilce" class="form-select" aria-label="Disabled select example">
        <option disabled value="">Select district</option>
        <option v-for="ilce of iller.ilceleri" :key="ilce" :value="ilce">{{ilce}}</option>
    </select>
    <div class="col-auto">
        <button id="trackerSubmit" type="submit" @click="$store.dispatch('addToFavorites', {
          il: iller.il,
          ilce: ilceler
        })" class="btn btn-primary mb-3">Add Card</button>
    </div>
</form>
  </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import allDistricts from '../data/district.js'

export default {
  name: 'offCanvas',
  data() {
    return {
      distObject: '',
      iller: '',
      ilceler:'',
      il: '',
      ilce: ''
    }
  },
  setup() {
    const districts = ref(allDistricts)
    return { districts}
  },
  methods: {
    onSubmit(e) {
           e.preventDefault()
           const newCity = {
               il: this.iller.il,
               ilce: this.ilceler,
           }
            this.$emit('add-city',newCity)
       }
  } 
}

</script>

<style scoped>
#addtracker {
position: absolute;
float:right;
width: 145px;
height: 131px;
right: 200px;
top:50px;

background: #EDE8FF;
color: #551FFF;
border-color: rgba(248, 249, 252, 1);;
box-shadow: 0px 18px 32px rgba(208, 210, 218, 0.15);
border-radius: 16px;

}
#addtracker:hover{
  background: white;
}
#circle{
  position:relative;
}
#plus {
  position: absolute;
  right: 51px;
  bottom:42px;
}#trackerSubmit {
  background: #EDE8FF;
box-shadow: 0px 18px 32px rgba(208, 210, 218, 0.15);
border-radius: 16px;
border-color: white;
color: #551FFF;
width: 360px;
height: 55px;
position: relative;
top:250px;
}
h5 {
  position: relative;
  right: 40%;
  top:20px;
}
.form-select {
  position: relative;
  left:7%;
  width: 320px;
height: 55px;
border-radius: 10px;
}
</style>