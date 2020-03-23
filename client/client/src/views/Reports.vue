<template>
  <div class="reports-page">
      <div class="add-report">
          <button> Add </button>
      </div>
      <div class="card" v-for="report in reports" :key="report.id">
      <h2>{{report.name}}</h2>
      <h4>{{report.cases}}</h4>
      <h4>{{report.death}}</h4>
      <h4>{{report.recovered}}</h4>
      <button @click.prevent="delete(report.id)">delete</button>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar'
export default {
  name: 'Reports',
  components: {
    Navbar
  },
  computed: {
    reports () {
      this.$store.state.reports
    }
  },
  methods: {
    delete (id) {
      axios({
        url: `http://localhost:3000/${id}`,
        method: 'delete',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(data => {
          this.$store.dispatch('FETCH_COUNTRIES')
        })
    }
  }
}
</script>

<style>
.card {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    align-content:  center;
    border: 2px black solid;
    padding: 10px;
    margin: 1vh;
    width: 30vh;
}
</style>
