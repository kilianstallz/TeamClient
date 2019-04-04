<template>
  <b-navbar
    toggleable="lg"
    type="light"
    variant="white"
    style="position: fixed; width: 100vw;"
  >
    <div class="container-fluid">

      <b-button
        class="mr-5"
        @click="$sidebar.showSidebar = !$sidebar.showSidebar"
      ></b-button>

      <b-navbar-brand>Dashboard</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav class="ml-auto">
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Link</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
</style>
