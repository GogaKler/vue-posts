<template>
  <div class="paginatorWrapper">
    <div
      v-for="pageNumber in totalPage"
      :key="pageNumber"
      class="page"
      :class="{ 'current-page': pageNumber === page }"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: "my-paginator",
  props: {
    totalPage: {
      type: Number,
      default: 10,
    },
    page: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    changePage(pageNumber) {
      this.$emit("update:page", pageNumber);
    },
  },
};
</script>

<style>
.paginatorWrapper {
  margin-top: 15px;
  display: flex;
}
.page {
  border: 1px solid #000;
  border-radius: 5px;
  margin-right: 5px;
  padding: 2px 5px;
  cursor: pointer;
}
.current-page {
  pointer-events: none;
  cursor: default;
  border: 2px solid teal;
  background-color: rgba(0, 128, 128, 0.2);
}
</style>
