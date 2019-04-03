<template>
  <div class="content">
    <fade-transition
      :duration="100"
      mode="out-in"
    >
      <!-- Pages Go Here -->
      <router-view></router-view>
    </fade-transition>
  </div>
</template>

<script>
import { FadeTransition } from 'vue2-transitions'
export default {
  components: {
    FadeTransition
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 60px;
  margin-left: auto;
  width: 85%;
  float: right;
}
</style>
