import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Planning from '../pages/Planning.vue'
import Tarifs from '../pages/Tarifs.vue'
import Instructeurs from '../pages/Instructeurs.vue'
import Contact from '../pages/Contact.vue'
import Mentions from '../pages/Mentions.vue'
import Confidentialite from '../pages/Confidentialite.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/planning', component: Planning },
  { path: '/tarifs', component: Tarifs },
  { path: '/instructeurs', component: Instructeurs },
  { path: '/contact', component: Contact },
  { path: '/mentions-legales', component: Mentions },
  { path: '/confidentialite', component: Confidentialite },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
