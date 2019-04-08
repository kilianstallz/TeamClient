<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: "Ubuntu";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
  height: 100%;
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;

  .label {
    font-weight: bold;
  }
  input {
    font-weight: 1rem;
    color: #495057;
  }
  .form-link {
    color: #007bff;
    height: 0.75rem;
    margin-bottom: 1rem;
  }
  .form-button {
    margin-bottom: 33px;
  }
}
</style>
