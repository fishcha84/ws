<template>
  <div>
    <!-- <h1>Hello {{ name }}</h1> -->

    <!-- <ul v-if="!$fetchState.pending">
      <li v-for="mountain of mountains" :key="mountain.title">
        {{ mountain.title }}
      </li>
    </ul> -->

    <!-- <p v-if="$fetchState.pending">
      Fetching mountains...
    </p>
    <p v-else-if="$fetchState.error">
      An error occurred :(
    </p> -->
    <!-- <div v-if="!$fetchState.pending"> -->
    <!-- <div v-else> -->
    <h1>Nuxt Mountains</h1>
    <ul>
      <!-- <li v-for="i in mountains" :key="i.title"> -->
      <li v-for="i in mountains" :key="i.title">
        {{ i.title }}
        <!-- {{ item.title }} -->
      </li>
    </ul>
    <!-- <button @click="$fetch"> -->
    <!-- Refresh
    </button> -->
    <!-- </div> -->
    <Tutorial />
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  // 一進入該頁就會執行
  // asyncData (context) {
  //   return { name: 'World' }
  // },

  // 一進入該頁就會執行
  // async fetch () {
  //   this.mountains = await fetch(
  //     'https://api.nuxtjs.dev/mountains'
  //   ).then(res => res.json())
  // },

  // async fetch () {
  //   const res = await this.$axios({
  //     url: 'https://api.nuxtjs.dev/mountains',
  //     method: 'get'
  //   })
  //   this.mountains = res.data
  // },

  // async asyncData ({ $axios }) {
  //   const mountains = await $axios.$get('https://api.nuxtjs.dev/mountains')
  //   return { mountains }
  // },

  async asyncData ({ $axios }) {
    try {
      const result = await $axios.$get('https://api.nuxtjs.dev/mountains')
      console.log('result', result)
      return { mountains: result }
    } catch (err) {
      console.log(err)
    }

    // $store.commit('setMountains', mountains)
  },

  head () {
    // Set Meta Tags for this Page
  },

  // data () {
  //   return {
  //     mountains: []
  //   }
  // },
  // computed: {
  //   mountains () {
  //     return this.$store.state.mountains
  //   }
  // },

  mounted () {
    // this.getData()
  },

  methods: {
    // spa 在client side get data
    // async getData () {
    //   const resp = await this.$axios({ url: 'api', method: 'get' })
    //   this.mountains = resp.data
    // }
  }
}
</script>
