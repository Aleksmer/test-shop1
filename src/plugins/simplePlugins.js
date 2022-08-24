import ScrollHandler from "@/mixins/scrollHandler";
import scrollHandler from "@/mixins/scrollHandler";


export default {
    install(Vue) {
        Vue.mixin(scrollHandler)
        Vue.prototype.$firstPlugin = function () {
            console.log('this is simple plugin!')
        }
    }
}
