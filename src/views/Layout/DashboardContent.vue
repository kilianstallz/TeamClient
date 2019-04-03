<template>
  <div class="container">
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
