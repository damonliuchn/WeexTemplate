<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<style>
  .wrapper { align-items: center; margin-top: 120px; }
</style>

<script>
    import pageMixins from './mixins/page-mixins'
  export default {
      mixins: [pageMixins],
      mounted: function () {
        this.push('/home')
    }
  }
</script>
