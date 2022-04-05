<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input v-model="post.title" placeholder="Название" type="text" />
    <my-input v-model="post.body" placeholder="Описание" type="text" />
    <my-button
      @click="createPost"
      style="align-self: flex-end; margin-top: 15px"
      >Создать</my-button
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: null,
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
