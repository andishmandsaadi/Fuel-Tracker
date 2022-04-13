<template>
  <header>
    <div class="header">
      <tr>
        <td><img height="30" width="30" alt="Liquid Tracker logo" src="../assets/logo.png"></td>
        <td><h4>Liquid Tracker</h4></td>
        <td><h5> <i class="fa-regular fa-clock"> </i >&nbsp;&nbsp; Last Updated: {{ $store.getters.getLastUpdated }}</h5></td>
      </tr>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style  scoped>
.header {
  position: absolute;
width: 2056px;
height: 90px;
left: -1px;
top: -60px;
background: #FFFFFF;
position: relative;
float: left;
} img {
 position: absolute;
width: 30px;
height: 30px;
left: 54px;
top:35px;

} h4 {
  position: absolute;
width: 155px;
height: 29px;
left: 88px;
top:35px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

color: #551FFF;
}
h5 {
  position: absolute;
width: 300px;
height: 29px;
left: 300px;
top:35px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 29px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

color:  rgba(146, 149, 158, 1);
;
}
</style>