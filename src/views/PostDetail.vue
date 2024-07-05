<template>
  <div class="post-detail">
    <h1>Post Detail page: {{ $route.params.id }}</h1>
    <p>Display the content of the post with id of {{ $route.params.id }} here</p>
    <div>
      <button @click="showPostId">Show post id</button>
    </div>
    <div>
      <button @click="goHome">go home in 3 sec</button>
    </div>
    <div>
      <button @click="goToFirst">go to 1st post</button>
    </div>
    <p><RouterLink to="/posts"> &lt; Back</RouterLink></p>
  </div>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();

const showPostId = () =>{
  alert(`route id: ${route.params.id}`)
}
const goHome = () => {
setTimeout(() => {
  router.push({name: 'home'})
}, 3000);
}
const goToFirst = () => {
setTimeout(() => {
  router.push({name: 'postDetail',
    params: {
      id: 'id1'
    }
  })
}, 3000);
}
</script>
