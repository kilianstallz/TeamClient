<template>
  <div class="content bottom">
    <fade-transition
      :duration="100"
      mode="out-in"
    >
      <!-- Pages Go Here -->
      <div class="container">
        <router-view></router-view>
      </div>
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
  height: 100%;
  width: 100%;
  float: right;
}
.bottom {
  flex-grow: 1; /*ensures that the container will take up the full height of the parent container*/
  overflow-y: auto; /*adds scroll to this container*/
  min-height: 100%;
}
</style>
