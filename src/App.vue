<template>
  <div id="app">
    <div class="nasa-header">
      <nasa-header></nasa-header>
    </div>
    <poad></poad>
    <nasa-footer></nasa-footer>
  </div>
</template>

<script>
import NasaHeader from "./components/NasaHeader.vue";
import Poad from "./components/Poad.vue";
import NasaFooter from "./components/NasaFooter.vue";

export default {
  components: {
    NasaHeader,
    Poad,
    NasaFooter
  }
};
</script>

<style>
body {
  background-color:#333;
}
#app {
  width: 1000px;
  margin: 10px auto;
}

.nasa-header {
  margin-bottom: 10px;
}
</style>
