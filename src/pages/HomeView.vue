<template>
    <div class="wrapper">
        <p>Test</p>
        <text class="title">home page, test vuex:{{count}}</text>
        <text class="scrm-button" @click="jump">click go about page</text>
    </div>
</template>

<style>
    .wrapper {
        align-items: center;
        margin-top: 120px;
    }

    .title {
        padding-top: 40px;
        padding-bottom: 40px;
        font-size: 32px;
    }

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
    import pageMixins from '../mixins/page-mixins'
    export default {
        mixins: [pageMixins],
        data () {
            return {}
        },
        computed: {
            count: function () {
                // 通过vuex的getters方法来获取state里面的数据
                return this.$store.getters.getCount;
            }
        },
        methods: {
            jump: function () {
                this.$router.push({ path: '/about'})
                // 调用vuex的ations设置城市的值
                this.$store.dispatch("decrement");
            }
        }
    }
</script>
