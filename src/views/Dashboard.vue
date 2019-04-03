<template>
  <div class="home">

    <b-nav
      vertical
      class="sidenav pt-5"
      style="position: fixed; margin-top: 40px;"
    >
      <profile-section />
      <div class="container mt-3">
        <b-nav-item to="/">Dashboard</b-nav-item>
        <b-nav-item>Team</b-nav-item>
        <b-nav-item>Profil</b-nav-item>
      </div>
    </b-nav>

    <navbar />

    <dashboard-content />

  </div>
</template>

<script>
import ProfileSection from './Layout/ProfileSection.vue'
import Navbar from './Layout/Navbar.vue'
import DashboardContent from './Layout/DashboardContent.vue'
export default {
  name: 'home',
  methods: {
    toggleSidebar () {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      } else {
        this.$sidebar.displaySidebar(true)
      }
    }
  },
  components: {
    ProfileSection,
    Navbar,
    DashboardContent
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  .sidenav {
    height: 100vh;
    width: 15vw;
    background: white;
  }
  .wrapper {
    width: 85vw;
    display: flex;
    flex-direction: column;
  }
}
</style>
