<template>
  <div id="app">
    <div id="nav">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    Header
  }
};
</script>

<style>
#app {
  font-family: "Nova Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  min-height: 100%;
  background-image: url("https://assets.marthastewart.com/styles/wmax-1500/d32/ideal-sugar-cookies-6379807-0717/ideal-sugar-cookies-6379807-0717_horiz.jpg?itok=OsDicfnW");
  margin: 0;
}
</style>
