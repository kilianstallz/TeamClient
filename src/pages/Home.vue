<template>
  <div class="home">
    <c-card closeable>
      <template v-slot:title>Neuer Trainingsplan!</template>
      <template v-slot:subtitle>Trainingsplan Mai verfügbar!</template>
      <template v-slot:action-button>
        <b-button
          to="/team"
          variant="white"
          style="white-space: nowrap;"
        >Anzeigen</b-button>
      </template>
    </c-card>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
</style>
