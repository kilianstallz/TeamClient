<template>
  <SlideXLeftTransition>
    <div
      id="left"
      class="column"
      v-show="showSidebar"
    >
      <b-nav
        vertical
        class="sidenav pt-5 bottom"
        style="position: fixed; margin-top: 40px;"
      >
        <profile-section />
        <div class="container mt-3">
          <b-nav-item to="/">Dashboard</b-nav-item>
          <b-nav-item to="/team">Team</b-nav-item>
          <b-nav-item>Profil</b-nav-item>
        </div>
      </b-nav>
    </div>
  </SlideXLeftTransition>
</template>

<script>
import { SlideXLeftTransition } from 'vue2-transitions'
import ProfileSection from './ProfileSection.vue'
export default {
  components: {
    ProfileSection,
    SlideXLeftTransition
  },
  computed: {
    showSidebar () {
      return this.$sidebar.showSidebar
    }
  }
}
</script>

<style lang="scss">
.column {
  height: 100%; /*allows both columns to span the full height of the browser window*/
  display: flex;
  flex-direction: column; /*places the left and right headers above the bottom content*/
}
#left {
  width: 15%;
  flex-shrink: 0; /*makes sure that content is not cut off in a smaller browser window*/
}
</style>
