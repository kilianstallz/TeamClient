<template>
  <div style="background-color: #28a745;">
    <div class="container py-5">
      <div class="card-deck text-center">
        <div class="card my-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Free</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">0€ <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>1 coach access</li>
              <li>Manage 6 players</li>
              <li>Track training data</li>
              <li>Many features included</li>
            </ul>
            <button type="button" class="btn btn-lg disabled btn-block btn-outline-primary">Currently selected</button>
          </div>
        </div>
        <div class="card my-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Standard</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">10€ <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Up to 2 coaches</li>
              <li>Manage 30 players</li>
              <li>Track training data</li>
              <li>Premium features included</li>
            </ul>
            <button type="button" class="btn btn-lg btn-primary btn-block">Upgrade now!</button>
          </div>
        </div>
        <div class="card my-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Premier</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">40€ <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Coach & staff access</li>
              <li>Manage and track your team</li>
              <li>Full features unlocked</li>
              <li>24/7 support</li>
            </ul>
            <button type="button" class="btn btn-lg btn-primary btn-block">Upgrade now!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 960px;
}
.pricing-header {
  max-width: 700px;
}
.card-deck .card {
  min-width: 220px;
}
</style>
