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
      <i v-if="user.firstName">{{user.firstName}} {{user.lastName}}</i>
    </div>
    <hr>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProfileSection',
  computed: {
    ...mapState('team', {
      team: state => state.team
    }),
    ...mapState('user', {
      user: state => state.user
    })
  }
}
</script>

<style>
</style>
