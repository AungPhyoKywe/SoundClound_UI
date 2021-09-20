import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Carousel3d from 'vue-carousel-3d';
import 'material-design-icons-iconfont';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(Carousel3d);
Vue.use(Vuetify);

export default new Vuetify({

    icons:{
        iconfont:'fa' || 'md'
    },
    theme:{
        themes:{
            dark:{
                background:"#2F3346"
            }
        }
    }
});
