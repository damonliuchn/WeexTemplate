const globalEvent = weex.requireModule('globalEvent');

export default {
    created() {
        this.globalEvent = globalEvent;
        this.globalEvent.addEventListener("androidBack", e => {
            this.$router.go(-1)
        });
    }
}
