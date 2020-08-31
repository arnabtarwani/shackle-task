import Vue from 'vue';
import Router from 'vue-router';
import Contact from './components/Contact.vue';
import Interests from './components/Interests.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/interests',
            name: 'interests',
            component: Interests
        }
    ]
});