<template>
  <div>
    {{ member }}{{ id }}
  </div>
</template>

<script>
export default {

  asyncData ({ params }) {
    const member = params.member
    const id = params.id
    return { member, id }
  }

}
</script>

<style>

</style>
