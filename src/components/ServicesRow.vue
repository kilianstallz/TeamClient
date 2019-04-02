<template>
  <div style="background-color: #28a745;">
    <div class="container wrapper">
      <b-row style="width: 100%;">
        <b-col cols="4">
          <b-card class="card">
            <b-card-title class="mb-0">Hobby Team</b-card-title>
            <b
              class="ml-1"
              style="color: #28a745;"
            >for hobby teams</b>
            <hr />
            <b-card-text>
              <ul style="list-style: none;">
                <li>1 Coach access</li>
                <li>Manage up to 6 Players</li>
                <li>Limited Features</li>
              </ul>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="4">
          <b-card class="card">
            <b-card-title class="mb-0">Standard Team</b-card-title>
            <b
              class="ml-1"
              style="color: #28a745;"
            >for regional teams</b>
            <hr />
            <b-card-text>
              <ul style="list-style: none;">
                <li>2 Coach access</li>
                <li>Manage up to 30 Players</li>
                <li>Premium Features</li>
              </ul>
            </b-card-text>
            <div class="container d-flex justify-content-end align-items-center bottom">
              <a
                href="#"
                class="mr-2"
                style="font-size: .9rem;"
              >Read More</a>
              <b-button variant="success">Upgrade</b-button>
            </div>
          </b-card>
        </b-col>

        <b-col cols="4">
          <b-card class="card">
            <b-card-title class="mb-0">Premier Team</b-card-title>
            <b
              style="color: #28a745;"
              class="mt-0 ml-1"
            >for professional teams</b>
            <hr>
            <b-card-text>
              <ul style="list-style: none;">
                <li>Unlimited coaches</li>
                <li>Staff and professionals</li>
                <li>Manage unlimited players</li>
                <li>Full premium features</li>
                <li>Early access</li>
              </ul>
            </b-card-text>
            <div class="container d-flex justify-content-end align-items-center bottom">
              <a
                href="#"
                class="mr-2"
                style="font-size: .9rem;"
              >Read More</a>
              <b-button variant="success">Upgrade</b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60vh;

  .card {
    height: 333px;
    display: flex;
    flex-direction: column;
    flex-flow: column nowrap;
    ul {
      margin-top: 30px;
      line-height: 1.8rem;
      color: grey;
      margin-bottom: auto;
    }
  }
}
</style>
