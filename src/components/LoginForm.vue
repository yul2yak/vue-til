<template lang="">
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">password: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button :disabled="!isUsernameValid || !password" type="submit">
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>
<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      try {
        const { data } = await loginUser(userData);
        console.log(data);
        this.logMessage = `${data.user.username} 님 환영합니다.`;
        this.initForm();
      } catch (error) {
        console.log(error.response);
        this.logMessage = `로그인에 실패하였습니다. \n(${error.response.data})`;
        return;
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>
<style lang=""></style>
