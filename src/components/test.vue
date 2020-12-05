<template>
  <SortedTable :values="values" style="text-align: center;">
    <thead>
    <tr>
      <th scope="col" style="text-align: center; width: 5rem;">
        <SortLink name="cityName">Linnanimi</SortLink>
      </th>
      <th scope="col" style="text-align: center; width: 10rem;">
        <SortLink name="temperature">Temperature</SortLink>
      </th>
      <th scope="col" style="text-align: center; width: 10rem;">
        <SortLink name="windSpeed">Tuulekiirus</SortLink>
      </th>
      <th scope="col" style="text-align: center; width: 10rem;">
        <SortLink name="humidity">Õhuniiskus</SortLink>
      </th>
      <th scope="col" style="text-align: center; width: 10rem;">
        <SortLink name="dateTime">Aeg</SortLink>
      </th>
    </tr>
    </thead>
    <tbody slot="body" slot-scope="sort">
    <tr v-for="value in sort.values" :key="value.id">
      <td>{{value.cityName}}</td>
      <td>{{value.temperature}}</td>
      <td>{{value.windSpeed}}</td>
      <td>{{value.humidity}}</td>
      <td>{{value.dateTime}}</td>
    </tr>
    </tbody>
  </SortedTable>
</template>

<script>
export default {
  name: "test",
  data: function () {
    return {
      cityName: "",
      values: [
        {cityName: "Tallinn", temperature: 5, windSpeed: "7", humidity: "50", dateTime: "miskit"},
        {cityName: "Riga", temperature: 2, windSpeed: "3", humidity: "60"},
        {cityName: "Tallinn", temperature: 5, windSpeed: "7", humidity: "50"},
        {cityName: "Tallinn", temperature: 5, windSpeed: "7", humidity: "50"},

      ]
    }
  }
}
</script>

<style scoped>

</style>