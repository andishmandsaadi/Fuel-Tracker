<template>
  <form class="row g-3">
    <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option v-for="districts of district" :key="districts.plaka" value="{{ districts.plaka }}">{{ districts.il }}</option>
    </select>
    <select class="form-select" aria-label="Disabled select example" disabled>
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
    </div>
</form>
</template>

<script>
export default {
    props: {
        district: {
        type: Object,
        required: true
    }
  }
}
</script>

<style>

</style>