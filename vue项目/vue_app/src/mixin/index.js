import Vue from 'vue'
import router from 'Router'
Vue.mixin({
    methods: {
        back(){
            router.back()
        },
        forward() {
            router.forward()
        }

    }
})