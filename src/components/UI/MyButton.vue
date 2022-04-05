<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  padding: 5px 15px;
  background: 0;
  color: teal;
  font-weight: 600;
  border: 1px solid teal;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.4s ease;
}
.btn:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>
