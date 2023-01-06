import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Signup from '../pages/Signup.vue';
import Login from '../pages/Login.vue'
import Post from '../pages/Post.vue';
import Feed from '../pages/Feed.vue';

import FeedPage from '../pages/Feedpage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/post',
      name: 'Post',
      component: Post
    },
    {
      path: '/feed/:id',
      name: 'FeedPage',
      component: FeedPage,
      props: true
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed
    },
  
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

export default router
