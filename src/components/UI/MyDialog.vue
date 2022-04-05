<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-dialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog(value = false) {
      this.$emit("update:show", value);
    },
  },
};
</script>

<style scoped>
.dialog {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
}
.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-width: 500px;
  min-height: 100px;
  padding: 20px;
}
</style>
