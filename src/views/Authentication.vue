<template>
  <div>
    <div class="container-fluid wrapper">
      <p
        style="font-size: 3rem;"
        class="text-gray3"
      >sport<span class="text-primary">on</span></p>

      <!-- Login Card -->
      <div
        class="p-3 shadow rounded"
        v-if="authMethod"
      >
        <b-alert
          :show="authenticationError !== ''"
          variant="danger"
        >{{ authenticationError }}</b-alert>
        <b-form
          style="padding: 16px; padding-bottom: 0px;"
          @submit.prevent="handleSubmit"
        >
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

          <b-form-group
            id="password"
            class="mb-0"
          >
            <b-form-input
              id="password-input"
              placeholder="Password"
              v-model="password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group class="m-0 p-0 text-right">
            <router-link
              :to="{ path: '/forgot', query: { method: 'register', redirect: $route.query.redirect }}"
              class="ml-3"
              style="font-size: 12.8px;"
            >Forgot password?</router-link>
          </b-form-group>

          <b-form-group
            v-if="!authenticating"
            class="align-items-center"
          >
            <b-button
              type="submit"
              variant="primary"
            >Log In</b-button>
          </b-form-group>

          <b-form-group
            v-else
            style="text-align: center;"
          >
            <b-spinner
              class="mt-3"
              variant="primary"
              type="grow"
            ></b-spinner>
          </b-form-group>

          <b-form-group class="m-0 p-0 text-center">
            <router-link
              :to="{ path: '/login', query: { method: 'register', redirect: $route.query.redirect }}"
              class="ml-3"
              style="font-size: 12.8px;"
            >Create a new account here!</router-link>
          </b-form-group>
        </b-form>
      </div>

      <!-- Register Full -->
      <div
        v-if="!authMethod"
        class="p-3 shadow rounded"
        style="min-width: 70%; padding-bottom: 0px;"
      >
        <!-- EMAIL -->
        <b-form
          class="p-3"
          style="padding-bottom: 0px;"
          @submit.prevent="handleRegister"
        >
          <h4>
            <i
              class="fas fa-user"
              style="font-size: 1.2rem;"
            ></i> Create Account
          </h4>
          <b-form-row>
            <b-col cols="12">
              <b-form-group label="Email Address">
                <b-form-input
                  type="text"
                  v-model="email"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>
          <!-- Email END -->
          <!-- Password -->
          <b-form-row>
            <b-col cols="12">
              <b-form-group label="Password">
                <b-form-input
                  v-model="password"
                  type="password"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>
          <!-- Password END -->
          <!-- Password -->
          <b-form-row>
            <b-col cols="12">
              <b-form-group label="Repeat password">
                <b-form-input
                  type="password"
                  v-model="passwordRepeat"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>
          <!-- Password END -->
          <!-- Password Label-->
          <b-row
            style="font-size: .8rem; color: gray; text-align: center;"
            class="mb-3"
          >
            <b-col cols="6">
              <span>8 characters minimum</span>
            </b-col>
            <b-col cols="6">
              <span>One number</span>
            </b-col>
          </b-row>
          <!-- Password Label END -->
          <!-- Country -->
          <b-form-row>
            <b-col cols="12">
              <b-form-group
                style="font-weight: bold;"
                label="Country"
              >
                <b-form-input
                  type="text"
                  v-model="country"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>
          <!-- Country END -->
          <!-- Checkboxes -->
          <b-form-row>
            <b-col cols="12">
              <b-form-group>
                <b-form-checkbox
                  v-model="terms"
                  required
                >I agree to the terms of service</b-form-checkbox>
              </b-form-group>
            </b-col>
          </b-form-row>
          <!-- Checkboxes END -->
          <!-- Sumbit -->
          <b-form-row>
            <b-col cols="12">
              <div class="d-flex flex-column justify-content-between align-items-center mt-3">
                <b-button
                  type="submit"
                  variant="primary"
                >Continue</b-button>
                <span class="mt-3 mb-0 pb-0">Already have an Account? <a
                    href="#"
                    @click="toLoginPage"
                  >Login here</a></span>
              </div>
            </b-col>
          </b-form-row>
          <!-- Submit END -->
        </b-form>
      </div>

      <i>Read our privacy policity</i>
    </div>
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
      terms: false,
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
    ...mapActions('user', ['fetchProfile']),
    ...mapActions('team', ['fetchTeam']),

    async handleSubmit () {
      // Perform a simple validation that email and password have been typed in
      // eslint-disable-next-line
      if (this.email != "" && this.password != "") {
        await this.login({ email: this.email, password: this.password })
          .then(isOK => {
            if (isOK) {
              this.password = ''
              // Redirect the user to the page he first tried to visit or to the home view
              return this.$router.push(this.$route.query.redirect || '/')
            }
          })
        this.password = ''
      }
    },
    async handleRegister () {
      // Perform simple validation
      this.passwordRepeatError = false
      // eslint-disable-next-line
      if (
        this.email !== '' &&
        this.password !== '' &&
        this.password === this.passwordRepeat &&
        this.terms === true
      ) {
        await this.signup({ email: this.email, password: this.password })
          .then(console.log('GO TO WELCOME'))
        this.password = ''
        this.passwordRepeat = ''
      } else if (this.password !== this.passwordRepeat) {
        this.passwordRepeatError = true
        this.password = ''
        this.passwordRepeat = ''
      } else if (this.terms === false) {
        this.termError = true
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>
