<template>
  <div class="container">
    <div class="d-flex flex-column pl-3">
      <img
        src="https://placehold.it/70"
        alt="Me"
        style="border-radius: 100px; width:70px;"
        class="mb-3"
      >
      <b v-if="team.name">{{ team.name }}</b>
      <i v-if="fullName">{{fullName}}</i>
    </div>
    <hr>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProfileSection',
  data () {
    return {
      fName: this.fullName
    }
  },
  computed: {
    ...mapState('team', {
      team: state => state.team
    }),
    fullName () {
      return this.$store.getters['user/fullName']
    }
  }
}
</script>

<style>
</style>
