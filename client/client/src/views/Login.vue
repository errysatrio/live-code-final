<template>
  <div class="login-page">
      <Alert v-show="isError.status" :isError="isError" @hide="isError.status=!isError.status"/>
      <form >
          <div>
              <label for="username-input">USERNAME</label>
          </div>
          <div>
              <input type="text" v-model="username">
          </div>
          <div>
              <label for="password-input">PASSWORD</label>
          </div>
          <div>
              <input type="password" v-model="password">
          </div>
      </form>
  </div>
</template>

<script>
import Alert from '../components/Alert'
import axios from 'axios'
const url = 'http://localhost:3000'
export default {
  name: 'Login',
  components: {
    Alert
  },
  data () {
    return {
      username: '',
      password: '',
      isError: {
        status: false,
        msg: ''
      }
    }
  },
  methods: {
    login () {
      axios({
        url: `${url}/login`,
        method: 'post',
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          this.isError.msg = err.response.data.message
          this.isError.status = true
        })
    }
  }
}
</script>

<style>

</style>
