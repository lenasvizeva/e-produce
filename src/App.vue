<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>



<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
}

</script>



<style lang="scss">
@import "./styles/base.scss";
@import "./styles/mixins.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

:root {
  --font: Roboto, sans-serif;
  --textColor: #374961;
  --linkActiveColor: #41b783;
}



</style>
