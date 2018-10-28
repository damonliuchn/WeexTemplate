const globalEvent = weex.requireModule('globalEvent');
const navigator = weex.requireModule('navigator');
import routes from '../router/routes'

export default {
    created() {
        this.globalEvent = globalEvent;
        this.globalEvent.addEventListener("androidBack", e => {
            this.pop()
        });
    },
    methods: {
        push (path) {
            if (WXEnvironment.platform !== 'Web') {
                routes.some(v =>{
                    if(v.path === path) {
                        navigator.push({
                            url: v.remoteBundle,
                            animated: "true"
                        })
                        return true;
                    }
                });
            }else{
                this.$router.push({ path: path})
            }
        },
        pop () {
            if (WXEnvironment.platform !== 'Web') {
                navigator.pop()
            }else{
                this.$router.go(-1)
            }
        }
    }
}
