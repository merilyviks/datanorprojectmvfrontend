<template>
  <div class="checkweather">
    <h1>Vaata ja salvesta oma lemmikute linnade ilmateateid</h1>

    <input v-model="cityName" placeholder="Sisestage linna nimi">
    <p></p>
    <button v-on:click="addcity()">Lisa nimi!</button>
  </div>

</template>

<script>

let addcityFunction = function () {
  let url = "http://localhost:8085/addCityName"
  this.$http.put(url, this.cityName)
}

export default {
  name: "checkweather",
  methods: {
    addcity: addcityFunction,

  },

  data: function () {
    return {
      cityName: "",
    }
  }

}
</script>

<style scoped>

</style>