<template>
  <div class="home">

    <navbar />

    <div class="wrapper">
      <side-bar />
      <div
        id="right"
        class="column"
      >
        <dashboard-content class="bottom" />
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from './Layout/Navbar.vue'
import DashboardContent from './Layout/DashboardContent.vue'
export default {
  name: 'home',
  data () {
    return {
      window: {
        width: 0
      }
    }
  },
  methods: {
    getWindowWidth (event) {
      this.window.width = window.innerWidth
      if (this.window.width < 768) {
        this.$sidebar.showSidebar = false
      } else {
        this.$sidebar.showSidebar = true
      }
    }
  },
  created () {
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
  height: 100%;
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
      background: #d1d1d1;
      width: 100%;
    }
    .bottom {
      flex-grow: 1; /*ensures that the container will take up the full height of the parent container*/
      overflow-y: auto; /*adds scroll to this container*/
    }
  }
}
</style>
