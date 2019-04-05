<template>
  <div
    v-if="show"
    class="shadow-sm m-0 p-0 my-3"
    style="width: 100%; border-radius: 10px; overflow: hidden; min-height: 100px;"
  >
    <div style="height: 12px; background: #007bff;"></div>
    <div class="container mt-3">
      <div class="d-flex flex-md-row align-items-center flex-column-reverse">
        <div class="d-flex flex-column container">
          <h4>
            <slot name="title"></slot>
          </h4>
          <p>
            <slot name="subtitle"></slot>
          </p>
        </div>
        <div class="h-100 mb-1 d-flex flex-row align-items-end justify-content-end">
          <slot name="action-button"></slot>
          <button
            @click="show = !show"
            v-if="closeable"
            class="btn btn-white"
          >X</button>
        </div>
      </div>
      <div class="container d-flex flex-column">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    subtitle: String,
    closeable: Boolean
  },
  data () {
    return {
      show: true
    }
  }
}
</script>

<style>
</style>
