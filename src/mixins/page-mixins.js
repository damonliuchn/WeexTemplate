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
            routes.some(v =>{
                if(v.path === path) {
                    navigator.push({
                        url: v.remoteBundle,
                        animated: "true"
                    })
                    return true;
                }
            });
        },
        pop () {
            navigator.pop()
        }
    }
}
