<template>
  <select :value="modelValue" @change="changeOptions" class="select">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOptions(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.select{
	height: 30px;
	outline: 0;
	border: 2px solid teal;
	font-weight: 600;
	color: teal;
	background: rgba(0, 128, 128, 0.1);
}
</style>
