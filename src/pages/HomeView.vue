<template>
  <div class="wrapper">
    <text class="title">this is home page.</text>
    <text class="scrm-button" @click="jump()">about</text>
  </div>
</template>

<style>
  .wrapper { align-items: center; margin-top: 120px; }
  .title { padding-top:40px; padding-bottom: 40px; font-size: 32px; }
  .scrm-button {
    width: 50px;
    height: 30px;
    outline: none;
    text-align: center;
    line-height: 30px;
    border: 1px solid #ff9999;
    color: #ff9999;
    font-size: 14px;
    background-color: #ffffff;
  }
</style>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      jump: function () {
        this.$router.push({ path: '/about'})
      }
    }
  }
</script>
