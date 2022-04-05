<template>
  <input :value="modelValue" @input="updateInput" class="input" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 5px 15px;
  border: 1px solid teal;
  margin-top: 8px;
  outline: 0;
  border-radius: 8px;
}
</style>
