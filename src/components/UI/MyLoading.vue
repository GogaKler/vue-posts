<template>
  <div class="loadingWrapper">
    <img :src="preloader" alt="Загрузка.." />
  </div>
</template>

<script>
export default {
  name: "my-loading",
  computed: {
    preloader() {
      return require("../../assets/preloaders/preloaderCircle.gif");
    },
  },
};
</script>

<style scoped>
.loadingWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
