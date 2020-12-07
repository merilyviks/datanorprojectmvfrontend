<template>
  <div class="checkweather">
    <h1>Vaata ja salvesta oma lemmikute linnade ilmateateid</h1>

    <p>
    <input v-model="see.cityName" placeholder="Sisestage linna nimi">
      {{cityName}}
    </p>
    <button v-on:click="addcity()">Lisa nimi!</button>

    <table border="0" align="center" width="45%">
      <tr>
        <th>Linna nimi</th>
        <th>Temperatuur</th>
        <th>Tuulekiirus</th>
        <th>Niiskus</th>
        <th>Aeg</th>
      </tr>
      <tr v-for="(id, linn) in response" :key="(id, linn)">
        <td>{{linn}}</td>
        <td>{{}}</td>


      </tr>
    </table>

    <p>
    <select v-model="selected">
      <option v-for="x in cityList" :key="x">{{x}}</option>
    </select>
    </p>


  </div>
</template>

<script>

let addcityFunction = function () {
  let url = "http://localhost:8099/addcityname"
  this.$http.post(url, this.see)
}

let cityList = [];

let getallcitynamesFunction = function () {
  this.$http.get("http://localhost:8099/getallcitynames").then(response => response.data)
      .then(function (response) {
          console.log(response[0].cityName)
          cityList.push(response[0].cityName)
        cityList.push(response[1].cityName)
          console.log(cityList)
          }
      )
}

export default {
  name: "checkweather",
  methods: {
    addcity: addcityFunction,
    getallcitynameFunction: getallcitynamesFunction

  },
  data () {
      return {
        see: {},
        response: [{}],
        selected: "",
        cityName: "",
        cityList: []
      }
  },
  created() {              // aktiveerib funktsiooni lehe laadimisel
    this.getallcitynameFunction();
  }
}
</script>

<style scoped>

</style>