<template>
  <b-card class="p-3">
      <b-form @submit.prevent="handleSubmit">
        <b-form-group
          v-if="method"
          id="email"
          label="Login"
          for="email-input"
          style="font-weight: bold;"
          description="Mostly, this will be your email."
        >
          <b-form-input
            id="email-input"
            placeholder="Username"
            v-model="email"
            type="email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group v-if="!method" id="password" class="mb-0">
          <b-form-input
            id="password-input"
            placeholder="Password"
            v-model="password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group class="align-items-center">
          <b-button type="submit" variant="success">Send Email</b-button>
        </b-form-group>
      </b-form>
    </b-card>
</template>

<script>
export default {
  // TODO: create reset form, routes and params -> reset password service and page styles
}
</script>

<style>

</style>
