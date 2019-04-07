<template>
  <div>
    <div style="height: 6px; background: #007bff;"></div>
    <b-navbar
      toggleable="md"
      type="light"
      variant="white"
      style="position: fixed; width: 100vw; z-index: 99999;"
    >
      <div class="container-fluid">

        <a
          class="mr-4"
          @click="$sidebar.showSidebar = !$sidebar.showSidebar"
        >
          <i
            class="fas fa-chevron-right"
            v-if="!$sidebar.showSidebar"
          ></i>
          <i
            class="fas fa-chevron-left"
            v-if="$sidebar.showSidebar"
          ></i>
        </a>

        <b-navbar-brand>Dashboard</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse
          id="nav-collapse"
          is-nav
        >
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown
              text="Settings"
              right
            >
              <b-dropdown-item to="/profile">Profile</b-dropdown-item>
              <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>

      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>

<style>
</style>
