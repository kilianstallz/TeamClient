<template>
  <div class="container-fluid wrapper">
    <h3>Set New Password</h3>
    <b-card class="p-3">
      <b-form @submit.prevent="handleSubmit">
        <b-form-group
          id="password"
          label="Your new password"
          for="password-input"
          style="font-weight: bold;"
        >
          <b-form-input
            id="password-input"
            placeholder="Password"
            v-model="password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="password-repeat"
          label="Repeat password"
          for="password-repeat-input"
          style="font-weight: bold;"
        >
          <b-form-input
            id="password-repeat-input"
            placeholder="Repeat Password"
            v-model="passwordRepeat"
            type="password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          v-if="!sending"
          class="align-items-center"
        >
          <b-button
            type="submit"
            variant="success"
          >Reset Password</b-button>
        </b-form-group>

        <b-form-group
          v-else
          style="text-align: center;"
        >
          <b-spinner
            variant="success"
            type="grow"
          ></b-spinner>
        </b-form-group>
      </b-form>
    </b-card>
    <i>Created by Kilian Stallinger</i>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  // TODO: create reset form, routes and params -> reset password service and page styles
  data () {
    return {
      password: '',
      passwordRepeat: '',
      sending: false
    }
  },
  computed: {
    token () {
      return this.$route.params.token
    }
  },
  methods: {
    ...mapActions('auth', ['resetPassword']),
    handleSubmit () {
      if (this.password !== '' && this.passwordRepeat !== '' && this.token) {
        this.sending = true
        this.resetPassword({ token: this.token, password: this.password })
          .then(res => {
            this.sending = false
            this.$router.push({ path: '/login', query: { redirect: this.$route.query.redirect } })
          })
      }
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>
