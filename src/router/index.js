import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import PostsView from '../views/Posts.vue';
import PostDetailView from '../views/PostDetail.vue';
import ModalsView from '../views/Modals.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: PostDetailView
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsView
    },
  ]
})

export default router
