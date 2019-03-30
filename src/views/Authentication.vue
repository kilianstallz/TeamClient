<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" v-model="email">
    <input type="password" v-model="password">
    <input type="submit" value="Send">
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
      ...mapGetters('auth', [
          'authenticating',
          'authenticationError',
          'authenticationErrorCode'
      ])
  },
  methods: {
      ...mapActions('auth', [
          'login'
      ]),
      handleSubmit() {
          // Perform a simple validation that email and password have been typed in
          if (this.email != '' && this.password != '') {
            this.login({email: this.email, password: this.password})
            this.password = ''
          }
      }
  }
}
</script>

<style>

</style>
