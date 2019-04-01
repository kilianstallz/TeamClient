<template>
  <div class="container-fluid wrapper">
    <h3>TeamManager</h3>

    <!-- Login Card -->
    <b-card class="p-3" v-if="authMethod">
      <b-alert :show="authenticationError !== ''" variant="danger">{{ authenticationError }}</b-alert>
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

        <b-form-group id="password" class="mb-0">
          <b-form-input
            id="password-input"
            placeholder="Password"
            v-model="password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group class="m-0 p-0 text-right">
          <a href="#" class="ml-1" style="font-size: .8rem;">Forgot password?</a>
        </b-form-group>

        <b-form-group v-if="!authenticating" class="align-items-center">
          <b-button type="submit" variant="success">LogIn</b-button>
        </b-form-group>

        <b-form-group v-else style="text-align: center;">
          <b-spinner variant="success" type="grow"></b-spinner>
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

    <!-- Register Card -->
    <b-card class="p-3 pb-0" v-if="!authMethod">
      <b-alert :show="authenticationError !== ''" variant="danger">{{ authenticationError }}</b-alert>
      <b-alert :show="passwordRepeatError" variant="danger">Your passwords have to match!</b-alert>
      <b-form @submit.prevent="handleRegister">
        <b-form-group
          id="email"
          label="Sign Up"
          for="email-input"
          style="font-weight: bold;"
          description="Others will see this email to contact you!"
        >
          <b-form-input
            id="email-input"
            placeholder="Your Email here..."
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

        <b-form-group id="password-repeat" class="mb-0">
          <b-form-input
            id="password-repeat-input"
            placeholder="Repeat Password..."
            v-model="passwordRepeat"
            type="password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group class="m-0 p-0 text-right">
          <router-link
            :to="{ path: '/login', query: { method: 'login', redirect: $route.query.redirect }}"
            class="ml-3"
            style="font-size: .8rem;"
          >Or login here!</router-link>
        </b-form-group>

        <b-form-group v-if="!authenticating" class="align-items-center">
          <b-button type="submit" variant="success">Submit</b-button>
        </b-form-group>

        <b-form-group v-else style="text-align: center;">
          <b-spinner variant="success" type="grow"></b-spinner>
        </b-form-group>

        <b-form-group class="mb-1">
          <a style="font-size: .8rem;" href="#">Privacy Policity</a>
        </b-form-group>
      </b-form>
    </b-card>

    <!-- Register Full -->
    <b-card class="p-1 mt-5" style="min-width: 70%;">
      <h4>
        <i class="fas fa-user" style="font-size: 1.2rem;"></i> Account Profile
      </h4>
      <!-- EMAIL -->
      <b-form-row>
        <b-col cols="12">
          <b-form-group label="Email Address">
            <b-form-input type="text" placeholder></b-form-input>
          </b-form-group>
        </b-col>
      </b-form-row>
      <!-- Email END -->
      <!-- Password -->
      <b-form-row>
        <b-col cols="12">
          <b-form-group label="Password">
            <b-form-input type="text" placeholder></b-form-input>
          </b-form-group>
        </b-col>
      </b-form-row>
      <!-- Password END -->
      <!-- Password Label-->
      <b-row style="font-size: .8rem; color: gray; text-align: center;" class="mb-3">
        <b-col cols="6">
          <span>8 characters minimum</span>
        </b-col>
        <b-col cols="6">
          <span>One number</span>
        </b-col>
      </b-row>
      <!-- Password Label END -->
      <!-- Name -->
      <b-form-row>
        <b-col cols="6">
          <b-form-group label="First Name">
            <b-form-input></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group label="Last Name">
            <b-form-input></b-form-input>
          </b-form-group>
        </b-col>
      </b-form-row>
      <!-- Name END -->
      <!-- Country -->
      <b-form-row>
        <b-col cols="12">
          <b-form-group label="Country">
            <b-form-input type="text" placeholder></b-form-input>
          </b-form-group>
        </b-col>
      </b-form-row>
      <!-- Country END -->
      <!-- Checkboxes -->
      <b-form-row>
        <b-col cols="12">
          <b-form-group>
            <b-form-checkbox>I agree to the terms of service</b-form-checkbox>
          </b-form-group>
        </b-col>
      </b-form-row>
      <!-- Checkboxes END -->
      <!-- Sumbit -->
      <b-form-row>
        <b-col cols="12">
          <div class="d-flex justify-content-between align-items-center mt-3">
            <span>Already have an Account? <a href="#" @click="toLoginPage">Login here</a></span>
            <b-button type="submit" variant="success">Continue</b-button>
          </div>
        </b-col>
      </b-form-row>
      <!-- Submit END -->
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
      password: '',
      passwordRepeat: '',
      passwordRepeatError: false
    }
  },
  computed: {
    ...mapGetters('auth', [
      'authenticating',
      'authenticationError',
      'authenticationErrorCode'
    ]),
    authMethod () {
      const method = this.$route.query.method
      if (method === 'register') return false
      else return true
    }
  },
  methods: {
    ...mapActions('auth', ['login', 'signup']),
    handleSubmit () {
      // Perform a simple validation that email and password have been typed in
      // eslint-disable-next-line
      if (this.email != "" && this.password != "") {
        this.login({ email: this.email, password: this.password })
        this.password = ''
      }
    },
    handleRegister () {
      // Perform simple validation
      this.passwordRepeatError = false
      // eslint-disable-next-line
      if (
        this.email !== '' &&
        this.password !== '' &&
        this.password === this.passwordRepeat
      ) {
        this.signup({ email: this.email, password: this.password })
        this.password = ''
        this.passwordRepeat = ''
      } else if (this.password !== this.passwordRepeat) {
        this.passwordRepeatError = true
        this.password = ''
        this.passwordRepeat = ''
      }
    },
    toLoginPage () {
      this.$router.push({ path: '/login', query: { method: 'login', redirect: this.$route.query.redirect } })
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
