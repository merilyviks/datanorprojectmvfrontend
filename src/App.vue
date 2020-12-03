<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Pealeht</router-link> |
      <router-link to="/ilm">Vaata ilma</router-link> |
    </div>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#select {
  padding: 100px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #014a18;
}

#nav a.router-link-exact-active {
  color: #498802;
}

.flex {
  display: flex;
}

</style>