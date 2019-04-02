<template>
  <div class="container-fluid wrapper">
    <h3>Reset Password</h3>
    <b-card class="p-3">
      <b-form @submit.prevent="handleSubmit">
        <b-form-group
          id="email"
          label="Your Email"
          for="email-input"
          style="font-weight: bold;"
          description="Enter the email you use for login."
        >
          <b-form-input
            id="email-input"
            placeholder="Username"
            v-model="email"
            type="email"
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

        <b-form-group v-if="message !== ''">
          <b-alert :show="message !== ''">
            {{ message }}
          </b-alert>
        </b-form-group>

        <b-form-group class="m-0 p-0 text-center">
          <router-link
            :to="{ path: '/login', query: { method: 'register', redirect: $route.query.redirect }}"
            class="ml-3"
            style="font-size: .8rem;"
          >Create a new account here!</router-link>
        </b-form-group>
      </b-form>
    </b-card>
    <i>Created by Kilian Stallinger</i>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ForgotPassword',
  data () {
    return {
      email: '',
      sending: false,
      message: ''
    }
  },
  computed: {},
  methods: {
    ...mapActions('auth', ['forgotPassword']),
    async handleSubmit () {
      if (this.email) {
        this.sending = true
        await this.forgotPassword(this.email)
          .then(response => {
            if (response.status === 200) {
              this.sending = false
              this.message = 'Please check your email inbox!'
            }
          })
      }
    }
  },
  created () {
    this.message = ''
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
