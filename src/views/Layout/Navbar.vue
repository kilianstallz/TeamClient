<template>
  <b-navbar
    toggleable="lg"
    type="light"
    variant="white"
    style="position: fixed; width: 100vw;"
  >
    <div class="container-fluid">
      <b-navbar-brand style="z-index: 10000;">Dashboard</b-navbar-brand>

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
