import { createRouter, createWebHashHistory } from "vue-router";
import WelcomeView from "@/views/WelcomeView.vue";
import AboutUsView from '@/views/AboutUsView.vue'
import WebsitesView from '@/views/WebsitesView.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {path: '/', name: 'aboutus', component: AboutUsView},
        {path: '/welcome', name: 'welcome', component: WelcomeView},
        {path: '/websites', name: 'websites', component: WebsitesView}
    ]
})