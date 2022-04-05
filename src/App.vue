<template>
  <navbar-component></navbar-component>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";

export default {
  components: { NavbarComponent },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: normal;
}
.app {
  padding: 20px;
}
.text.red {
  color: red;
}
</style>
