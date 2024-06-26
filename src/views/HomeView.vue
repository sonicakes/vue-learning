<template>
  <div class="home">
    <h2> {{ appTitle }}</h2>
  <h3> {{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <p>This number is <em>{{ oddOrEven }}</em></p>
    </div>
    <div class="edit">
      <h4>Edit counter title</h4>
      <input v-model="counterData.title" type="text">
    </div>
  </div>
</template>

<!-- Options API script -->
<!-- <script>
export default {
  data() {
    return {
      counter: 10
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    }
  }
}
</script> -->

<!-- Composition API script - new -- script version -->
<!-- <script>

import {ref} from 'vue';

export default {
  setup() {
const counter = ref(20);

const increaseCounter = () => {
  counter.value++
}
const decreaseCounter = () => {
  counter.value--
}
return {
  counter,
  increaseCounter,
  decreaseCounter
}
  }
}
</script> -->


<!-- new script setup version -->
<script setup>

import {reactive, computed, watch} from 'vue';

// const counter = ref(20);
// const counterTitle = ref('My Counter');

const appTitle = 'My amazing app';
//methods
const increaseCounter = (amount, ev) => {
  console.log('event', ev)
  counterData.count +=amount;
}
const decreaseCounter = () => {
  counterData.count--
}

const counterData = reactive({
  count: 20,
  title: 'My Counter'
});
//computed
const oddOrEven = computed (() => {
 return counterData.count % 2 === 0 ? 'even' : 'odd'
})

//watch
watch(() => counterData.count, (newCount, oldCount) => {
console.log('old count', oldCount);
console.log('new count', newCount)
if (newCount> 25) {
  alert('we have gone past 25!')
}
})
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn, .counter {
  font-size: 40px;
  margin: 10px;
}
</style>
