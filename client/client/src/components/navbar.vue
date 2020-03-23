<template>
  <div class="nav">
      <div>

      <div @click.prevent="toHome" class="nav-list">
          Home
      </div>
      <div @click.prevent="toReports" class="nav-list">
          Reports
      </div>
      </div>
      <div @click.prevent="signout" class="nav-list">
          signOut
      </div>
  </div>

</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toHome () {
      this.$router.push('/')
    },
    toReports () {
      this.$router.push('/reports')
    },
    signout () {
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
