<template>
  <div class="refresh">
      <p id="refreshTitle">Refresh Rate</p>
    <input type="radio" class="btn-check" name="options" id="btn-check-outlined" value="15" v-model="picked" autocomplete="off" @change="$store.dispatch('updateTimer',picked)">
    <label class="btn btn-outline-primary" for="btn-check-outlined"><p>15s</p></label>
    <input type="radio" class="btn-check" name="options" id="btn-check-outlined2" value="30" v-model="picked" autocomplete="off" @change="$store.dispatch('updateTimer',picked)">
    <label class="btn btn-outline-primary" for="btn-check-outlined2"><p>30s</p></label>
    <input type="radio" class="btn-check" name="options" id="btn-check-outlined3" value="45" v-model="picked" autocomplete="off" @change="$store.dispatch('updateTimer',picked)">
    <label class="btn btn-outline-primary" for="btn-check-outlined3"><p>45s</p></label><br>
    <input type="radio" class="btn-check" name="options" id="btn-check-outlined4" value="60" v-model="picked" autocomplete="off" @change="$store.dispatch('updateTimer',picked)">
    <label class="btn btn-outline-primary" for="btn-check-outlined4"><p>1dk</p></label>
    <input type="radio" class="btn-check" name="options" id="btn-check-outlined5" value="900" v-model="picked" autocomplete="off" @change="$store.dispatch('updateTimer',picked)">
    <label class="btn btn-outline-primary" for="btn-check-outlined5"><p>15dk</p></label>
    <input type="radio" class="btn-check" name="options" id="btn-check-outlined6" value="1800" v-model="picked" autocomplete="off" @change="$store.dispatch('updateTimer',picked)" checked>
    <label class="btn btn-outline-primary" for="btn-check-outlined6"><p>30dk</p></label>
  </div>
</template>

<script>
export default {

}

</script>

<style>
.refresh {
position: absolute;
float:right;
width: 145px;
height: 131px;
right: 20px;
top:50px;

background: #EDE8FF;
color: #551FFF;
border-color: rgba(248, 249, 252, 1);;
box-shadow: 0px 18px 32px rgba(208, 210, 218, 0.15);
border-radius: 16px;

} .btn-outline-primary{
    width: 35px;
height: 35px;
font-size: 2px;
background: #E8E0FF;
border: 0.5px solid #7549FF;
box-sizing: border-box;
box-shadow: 0px 18px 32px rgba(208, 210, 218, 0.15);
border-radius: 4px;
margin: 5px;
position: relative;
bottom: 10px;
}
p{
    font-size: 14px;
    position: relative;
    left: -10px;;
}#refreshTitle{
    font-size: 20px;
    position: relative;
    top:8px;
    left:3px;
}
</style>