<template>
  <div class="add-reports">
      <div>
          <label for="CountryId">COUNTRY</label>
      </div>
      <div>
          <select name="CountryId" v-model="CountryId">
              <option v-for="country in countries" :key="country.id" :value="country.id" >{{country.name}}</option>
          </select>
      </div>
      <div>
          <label for="cases">CASES</label>
      </div>
      <div>
          <input type="number" v-model="cases" >
      </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'Add',
  data () {
    return {
      cases: 0,
      CountryId: 0
    }
  },
  computed: {
    Countries () {
      this.$store.state.reports
    }
  },
  methods: {
    add () {
      Axios({
        url: 'http://localhost:3000/reports',
        method: 'post',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          cases: this.cases,
          CountryId: this.CountryId
        }
      })
        .then(data => {
          this.$router.push('/reports')
        })
    }
  }

}
</script>

<style>

</style>
