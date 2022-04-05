<template>
  <div>
    <h1>Страница постов</h1>
    <my-input v-model="searchQuery" placeholder="Поиск..." />
    <div class="buttonsWrapper">
      <my-select v-model="selectedSort" :options="sortOptions" />
      <my-button @click="showDialog" style="margin: 10px 0"
        >Создать пост</my-button
      >
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      v-if="!isFetching"
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
    />
    <my-loading v-else></my-loading>
    <my-paginator
      :page="page"
      :totalPage="totalPage"
      v-model:page="page"
    />
  </div>
</template>

<script>
import { postsApi } from "@/api/api";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";

export default {
  components: {
    PostForm,
    PostList,
    MyDialog,
  },
  mounted() {
    this.fetchPosts(this.limit, this.page);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    page() {
      this.fetchPosts(this.limit, this.page);
    },
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isFetching: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPage: 0,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.unshift(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts(limit, page) {
      try {
        this.isFetching = true;
        const response = await postsApi.getPosts(limit, page);
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        alert("Ошибка: " + e);
      } finally {
        this.isFetching = false;
      }
    },
  },
};
</script>

<style scoped>
.buttonsWrapper {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
</style>
