<template>
  <div class="container-fluid wrapper">
    <h3>TeamManager</h3>
    <b-card>
      <b-alert
        :show="authenticationError !== ''"
        variant="danger"
      >{{ authenticationError }}</b-alert>
      <b-form @submit.prevent="handleSubmit">
        <b-form-group
          id="email"
          label="Login"
          for="email-input"
          style="font-weight: bold;"
          description="Mostly, this will be your email."
        >
          <b-form-input
            id="email-input"
            placeholder="Username"
            v-model="email"
            type="email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="password">
          <b-form-input
            id="password-input"
            placeholder="Password"
            v-model="password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          v-if="!authenticating"
          class="align-items-center"
        >
          <b-button
            type="submit"
            variant="success"
          >LogIn</b-button>
          <a
            href="#"
            class="ml-1"
            style="font-size: .8rem;"
          >Forgot password?</a>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters('auth', [
      'authenticating',
      'authenticationError',
      'authenticationErrorCode'
    ])
  },
  methods: {
    ...mapActions('auth', ['login']),
    handleSubmit () {
      // Perform a simple validation that email and password have been typed in
      // eslint-disable-next-line
      if (this.email != "" && this.password != "") {
        this.login({ email: this.email, password: this.password })
        this.password = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>
