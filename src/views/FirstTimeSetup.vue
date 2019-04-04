<template>
  <div class="text-center" >
    <transition-group>
      <div class="container" v-if="currentPage === 1" :key="1">
        <h2 class="title text-center">Welcome{{ user.lastName&&user.firstName ? `, ${user.firstName} ${user.lastName}!` : '!' }}</h2>
        <h4 class="text-muted">Let's create your {{user.sportType}} team!</h4>
        <b-form class="mt-5">
          <b-row>
              <b-col>
                <b-form-group class="text-left" style="font-weight: bold;" label="Your first name">
                  <b-form-input v-model="user.firstName" required></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group class="text-left" style="font-weight: bold;" label="Your last name">
                  <b-form-input v-model="user.lastName" required></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
          <b-form-group class="text-left" label="Select your sport:" description="You can not change this later!">
            <b-form-select required :options="sports" v-model="user.sportType">
            </b-form-select>
          </b-form-group>
          <b-form-group class="text-right">
            <b-button @click="currentPage++" variant="success" :disabled="!(user.sportType && user.firstName && user.lastName)">Next <i class="fas fa-chevron-right"></i></b-button>
          </b-form-group>
        </b-form>
      </div>
      <div class="container" v-if="currentPage === 2" :key="2">
        <h4 class="text-muted">Name your {{user.sportType}} team!</h4>
        <b-form class="mt-5">
          <b-form-group class="text-left" style="font-weight: bold;" label="Team Name">
            <b-form-input v-model="team.name"></b-form-input>
          </b-form-group>
          <div class="d-flex justify-content-between mt-3">
            <button @click="currentPage--" class="btn btn-dark"><i class="fas fa-chevron-left"></i> Back</button>
            <b-button @click="currentPage++" variant="success" :disabled="!(team.name.length >= 4)">Next <i class="fas fa-chevron-right"></i></b-button>
          </div>
        </b-form>
      </div>
      <div class="container" v-if="currentPage >= 3" :key="2">
        <h4 class="text-muted">Please check back your input!</h4>
        <b-form class="mt-5">
          <b-row>
              <b-col>
                <b-form-group class="text-left" style="font-weight: bold;" label="Your first name">
                  <b-form-input v-model="user.firstName" required></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group class="text-left" style="font-weight: bold;" label="Your last name">
                  <b-form-input v-model="user.lastName" required></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-form-group class="text-left" style="font-weight: bold;" label="Team name">
              <b-form-input v-model="team.name"></b-form-input>
            </b-form-group>
            <b-form-group class="text-left" style="font-weight: bold;" label="Select your sport" description="You can not change this later!">
            <b-form-select required :options="sports" v-model="user.sportType">
            </b-form-select>
          </b-form-group>
          <div class="d-flex justify-content-between mt-3">
            <button @click="currentPage--" class="btn btn-dark"><i class="fas fa-chevron-left"></i> Back</button>
            <b-button @click="submitSetup" variant="success" :disabled="!(team.name.length >= 4 && user.sportType && user.firstName && user.lastName)">Finish Setup</b-button>
          </div>
        </b-form>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'FirstTimeSetup',
  data () {
    return {
      currentPage: 1,
      sports: [{ text: 'Select One', value: null }, `Running`, 'Football'],
      user: {
        sportType: null,
        firstName: '',
        lastName: ''
      },
      team: {
        name: ''
      }
    }
  },
  methods: {
    next () {
      this.currentPage = this.currentPage++
    },
    submitSetup () {
      // TODO Edit User
      this.$store.dispatch('user/updateUser', { user: this.user })
      // TODO Create Team
      this.$store.dispatch('team/createTeam', this.team)
      // TODO Update User
      this.$store.dispatch('user/fetchProfile')

      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
i {
  font-size: 0.9rem;
}
.container {
  height: 90vh;
  max-width: 450px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
</style>
