<template>
  <div class="container">
    <div class="d-flex flex-column pl-3">
      <img
        src="https://placehold.it/70"
        alt="Me"
        style="border-radius: 100px; width:70px;"
        class="mb-3"
      >
      <b v-if="teamName">{{ teamName }}</b>
      <i v-if="fullName">{{fullName}}</i>
    </div>
    <hr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProfileSection',
  computed: {
    ...mapGetters('user', [
      'fullName',
      'teamName'
    ])
  }
}
</script>

<style>
</style>
