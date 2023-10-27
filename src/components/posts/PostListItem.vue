<template lang="">
  <div>
    <li>
      <div class="post-title">{{ post.title }}</div>
      <div class="post-contents">{{ post.contents }}</div>
      <div class="post-time">{{ post.createdAt }}</div>
    </li>
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
<style lang=""></style>
