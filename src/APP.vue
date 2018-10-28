<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<style>
  .wrapper { align-items: center; margin-top: 120px; }
</style>

<script>
  export default {
    mounted: function () {
      this.$router.push({ path: '/home'})
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
