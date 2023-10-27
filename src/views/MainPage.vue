<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading" />
      <ul v-else>
        <PostListItem v-for="post in postItems" :key="post._id" :post="post" />
      </ul>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import PostListItem from '@/components/posts/PostListItem.vue';
import { fetchPosts } from '@/api/index';

export default {
  components: {
    PostListItem,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      console.log(data.posts);
      this.postItems = data.posts;
    },
  },
  created() {
    console.log('created!');
    this.fetchData();
  },
};
</script>

<style></style>
