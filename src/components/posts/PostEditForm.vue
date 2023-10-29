<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
          <p
            v-if="!isContentsValid"
            class="validation-text warning isContentTooLong"
          >
            Contents length must be less than 250
          </p>
        </div>
        <button type="submit" class="btn">Edit Complete</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>
<script>
import { fetchPost, editPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    console.log(data);
    this.title = data.title;
    this.contents = data.contents;
  },
  methods: {
    async submitForm() {
      try {
        const id = this.$route.params.id;
        const response = await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        console.log(response);
        this.$router.push('/main');
      } catch (error) {
        console.log(error.response.data.message);
        this.logMessage = error.response.data.message;
      }
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
