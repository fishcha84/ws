<template>
  <div>
    <input id="" v-model="name" type="text" name="">
    <button @click="showSignPic()">
      show姓名圖片
    </button>
    <h3 id="signtext" />
    <img id="sign" src="" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {

    async showSignPic () {
      const resp = await this.createSignPic()
      // const path = temp.info // 用this.$axios.$post寫法，resp就直接是resp.data
      const path = resp.data.info
      document.querySelector('#sign').src = `http://localhost:8000/${path}`
    },

    createSignPic () {
      // return this.$axios.$post('/api/sign', {
      //   name: this.name
      // })
      return this.$axios({
        url:
        // '/api/sign', // 可這麼寫
        // 'http://localhost:8000/api/sign', // 也可這麼寫，多此一舉而已，因nuxt.config已經設定代理
        '/sign', // 不能這麼寫
        method: 'post',
        data: {
          name: this.name
        }
      })
    }
  }

}
</script>

<style>

</style>
