<template>
  <div class="home">

    <navbar />

    <div class="wrapper">
      <side-bar />
      <div
        id="right"
        class="column"
      >
        <dashboard-content @click.native="closeSidebar" />
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Navbar from './Layout/Navbar.vue'
import DashboardContent from './Layout/DashboardContent.vue'
export default {
  name: 'DashboardLayout',
  data () {
    return {
      window: {
        width: 0
      }
    }
  },
  methods: {
    ...mapActions('team', [
      'fetchTeam'
    ]),
    ...mapActions('user', [
      'fetchProfile'
    ]),
    closeSidebar () {
      if (this.$sidebar.showSidebar) {
        if (this.window.width < 768) {
          this.$sidebar.displaySidebar(false)
        }
      }
    },
    getWindowWidth (event) {
      this.window.width = window.innerWidth
      if (this.window.width < 768) {
        this.$sidebar.showSidebar = false
      } else {
        this.$sidebar.showSidebar = true
      }
    }
  },
  computed: {
    ...mapState('team', {
      team: state => state.team
    }),
    ...mapState('user', {
      user: state => state.user
    })
  },
  created () {
    if (!this.team.name) {
      this.fetchTeam()
      this.fetchProfile()
    }
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)
      this.getWindowWidth()
    })
  },
  destroyed () {
    window.removeEventListener('resize', this.getWindowWidth)
  },
  components: {
    Navbar,
    DashboardContent
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}
.home {
  height: 100vh;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0;
  flex-direction: column;
  .wrapper {
    height: 100%;
    overflow: hidden; /*makes the body non-scrollable (we will add scrolling to the sidebar and main content containers)*/
    margin: 0px; /*removes default style*/
    display: flex; /*enables flex content for its hildren*/
    box-sizing: border-box;
    .column {
      height: 100%; /*allows both columns to span the full height of the browser window*/
      display: flex;
      flex-direction: column; /*places the left and right headers above the bottom content*/
    }
    #right {
      width: 100%;
    }
  }
}
</style>
