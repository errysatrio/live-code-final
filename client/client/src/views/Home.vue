<template>
  <div>
    <Navbar/>
  <div class="home">
    <div class="card" v-for="country in countries" :key="country.id">
      <h2>{{country.name}}</h2>
      <h4>{{country.cases}}</h4>
      <h4>{{country.death}}</h4>
      <h4>{{country.recovered}}</h4>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Alert from '@/components/Alert.vue'
import Navbar from '@/components/navbar.vue'

export default {
  name: 'Home',
  components: {
    Alert,
    Navbar
  },
  data () {
    return {

    }
  },
  computed: {
    countries () {
      this.$store.state.countries
    }
  }
}
</script>
