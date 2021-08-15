<template>
  <div>
    <h1>Nuxt {{ name }}</h1>
    <AA />
  </div>
</template>

<script>
import AA from './components/AA'

export default {

  components: { AA },

  // asyncData不可在component執行
  asyncData (context) {
    return { name: 'Mountains' }
  },

  head () {
    // Set Meta Tags for this Page
  }

}
</script>
