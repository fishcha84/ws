<template>
  <div>
    <Header />
    <Sidebar />
    <Footer />
    <Nuxt />
  </div>
</template>

<script>

// 因nuxt.config.js有設定components會自動引入，因此也可以不用import跟components
import Header from '~/components/Header.vue'
import Sidebar from '~/components/Sidebar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: { Header, Sidebar, Footer }
}

</script>

<style />
