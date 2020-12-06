<template>
  <div class="checkweather">
    <h1>Vaata ja salvesta oma lemmikute linnade ilmateateid</h1>

    <p>
    <input v-model="see.cityName" placeholder="Sisestage linna nimi">
      {{cityName}}
    </p>
    <button v-on:click="addcity()">Lisa nimi!</button>

    <p>
    <select v-on="getallcitynames()">
      <option v-for="cityName in cityList" :key="cityName">{{cityName}}</option>
    </select>
    </p>


  </div>
</template>

<script>

let addcityFunction = function () {
  let url = "http://localhost:8099/addcityname"
  this.$http.post(url, this.see)
}

let cityList;
let getallcitynamesFunction = function () {
  alert("töötab")
  this.$http.get("http://localhost:8099/getallcitynames").then(response => response.data)
      .then(function (response) {
          console.log(response)

          cityList = response
          console.log(cityList)
          }
      )
}

export default {
  name: "checkweather",
  methods: {
    addcity: addcityFunction,
    getallcitynames: getallcitynamesFunction

  },
  data () {
      return {
        see: {},
        cityName: "",
        allcitynames: {},
        cityList: []
      }
  }
}
</script>

<style scoped>

</style>