<template>
  <div class="home">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-navbar-brand>TM</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Link</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

      </div>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>
