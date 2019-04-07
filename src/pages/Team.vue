<template>
  <div class="team">
    <c-card v-if="team && !isFetching">
      <template v-slot:title>{{team.details.name}}</template>
      <template v-slot:action-button>
        <div class="btn-group">
          <b-dropdown
            variant="white"
            right
          >
            <b-dropdown-item v-b-modal="'inviteModal'">Invite</b-dropdown-item>
          </b-dropdown>
        </div>
      </template>
      <div class="text-center font-weight-bold mt-3">
        Share this link to invite team members:
        <div>
          <code>https://todo.invite.player</code>
        </div>
      </div>
    </c-card>
    <b-modal
      centered
      id="inviteModal"
      title="Invite people to your team!"
    >
      <div class="text-center font-weight-bold mt-3">
        Share this link to invite team members:
        <div>
          <code>https://todo.invite.player</code>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TeamPage',
  computed: {
    ...mapGetters('team', [
      'isFetching',
      'team'
    ])
  }
}
</script>

<style>
</style>
