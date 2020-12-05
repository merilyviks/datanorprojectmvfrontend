<template>
  <div class="checkweather">
    <h1>Vaata ja salvesta oma lemmikute linnade ilmateateid</h1>

    <p>
    <input v-model="cityName" placeholder="Sisestage linna nimi">
    </p>
    <button v-on:click="addcity()">Lisa nimi!</button>

  </div>
</template>

<script>

let addcityFunction = function () {
  let url = "http://localhost:8090/addcityname"
  this.$http.post(url, this.cityName)
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