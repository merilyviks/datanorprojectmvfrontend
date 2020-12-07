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
        <th style="width: 25em">Järjekorranr</th>
        <th style="width: 25em">Linna id</th>
        <th style="width: 25em">Linnanimi</th>
      </tr>
      <tr v-for="(row, index) in cityList" :key="row" style="height: 35px">
        <td>{{ index + 1 }}</td>
        <td>{{ row.id }}</td>
        <td>{{ row.cityName }}</td>
        <button v-on:click="removeRow(row.cityName)">Kustuta linn</button>
      </tr>
    </table>

    <table border="0" align="center" width="45%">
      <tr>
        <th style="width: 25em">Järjekorranr</th>
        <th style="width: 25em">Linna id</th>
        <th style="width: 25em">Temperatuur</th>
        <th style="width: 25em">Tuule kiirus</th>
        <th style="width: 25em">Õhuniiskus</th>
        <th style="width: 25em">Aeg</th>
      </tr>
      <tr v-for="(row, index) in weatherinfo" :key="row" style="height: 35px">
        <td>{{ index + 1 }}</td>
        <td>{{ row.cityId }}</td>
        <td>{{ row.temperature }}</td>
        <td>{{ row.windSpeed }}</td>
        <td>{{ row.humidity}}</td>
        <td>{{ row.dateTime}}</td>
      </tr>
    </table>


  </div>
</template>

<script>

let addcityFunction = function () {
  let url = "http://localhost:8099/addcityname"
  this.$http.post(url, this.see)
}

let getallweatherinfoFunction = function () {
  this.$http.get("http://localhost:8099/getallweatherinfo").then(result => this.weatherinfo = result.data)
}


let getallcitynamesFunction = function () {
  this.$http.get("http://localhost:8099/getallcitynames").then(result => this.cityList = result.data)
}

let deletecitynamesFunction = function (cityName) {
  this.$http.delete("http://localhost:8099/deletecity",  {params: {cityName}})
}

export default {
  name: "checkweather",
  methods: {
    addcity: addcityFunction,
    getallcitynameFunction: getallcitynamesFunction,
    getallweatherinfoFunction: getallweatherinfoFunction,
    removeRow: deletecitynamesFunction
  },
  data () {
      return {
        see: {},
        selected: "",
        cityName: "",
        cityList: [{}],
        weatherinfo: [{}]
      }
  },
  created() {              // aktiveerib funktsiooni lehe laadimisel
    this.getallcitynameFunction();
    this.getallweatherinfoFunction();
  }
}
</script>

<style scoped>

</style>