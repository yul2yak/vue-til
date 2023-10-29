<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt | formatDate }}
      <ion-icon
        class="icon"
        name="pencil-outline"
        @click="routeEditPage"
      ></ion-icon>
      <ion-icon
        class="icon"
        name="trash-outline"
        @click="deleteItem"
      ></ion-icon>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  //   filters: {
  //     formatDate(value) {
  //       return new Date(value);
  //     },
  //   },
  methods: {
    async deleteItem() {
      if (confirm('Do you wnat delete it?')) {
        const { data } = await deletePost(this.postItem._id);
        console.log(`deleted! ${data}`);
        this.$emit('refresh');
      }
    },
    routeEditPage() {
      this.$router.push(`/post/${this.postItem._id}`);
    },
  },
};
</script>

<style></style>
