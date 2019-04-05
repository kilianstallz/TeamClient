<template>
  <div
    class="profile"
    v-if="method === null && user !== null"
  >
    <div
      class="shadow-sm m-0 p-0 my-3"
      style="width: 100%; border-radius: 10px; overflow: hidden; min-height: 100px;"
    >
      <div style="height: 12px; background: #007bff;"></div>
      <div class="container mt-2">
        <div class="d-flex flex-row">
          <div class=" container d-flex flex-column">
            <h4>Your Profile</h4>
            <div class="d-flex flex-column">
              <label
                class="mb-0"
                style="font-weight: bold;"
                for="name"
              >Name</label>
              <span id="name">{{user.firstName}} {{user.lastName}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Profile',
  computed: {
    method () {
      return this.$route.query.method || null
    },
    ...mapState('user', {
      user: state => state.user
    })
  }
}
</script>

<style>
</style>
