<template>
  <div>
    <ul>
      <li v-for="i in mountains" :key="i.title">
        {{ i.title }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {

  data () {
    return {
      mountains: []
    }
  },

  // fetch可在component執行
  async fetch () {
    try {
      const result = await this.$axios.$get('https://api.nuxtjs.dev/mountains')
      this.mountains = result // data必須宣告接資料的變數
    } catch (e) {
    }
  }

}
</script>
