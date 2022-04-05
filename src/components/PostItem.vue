<template>
  <div class="post">
		<div class="post-content">
      <div>
        Название:<strong class="post-content__text"> {{ post.title }} </strong>
      </div>
      <div>
        Описание:<strong class="post-content__text"> {{ post.body }} </strong>
      </div>
    </div>
    <my-button @click="$emit('remove', this.post)">Удалить</my-button>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
.post-content {
  margin-right: 10px;
}
.post-content__text {
  margin-left: 5px;
}
</style>
