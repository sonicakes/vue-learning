<template>
  <div class="home">
    <h2 ref="appTitleRef"> {{ appTitle }}</h2>
  <h3> {{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <p>This number is <em>{{ oddOrEven }}</em></p>
    </div>
    <div class="edit">
      <h4>Edit counter title</h4>
      <input v-model="counterData.title" type="text" v-autofocus>
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
  },
  directives: {
    autofocus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
</script>  -->

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
</script>  -->


<!-- new script setup version -->
 <script setup>

import {reactive, computed, watch, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onUpdated, onBeforeUpdate, ref, nextTick} from 'vue';
import { vAutofocus } from '@/directives/vAutoFocus';
// const counter = ref(20);
// const counterTitle = ref('My Counter');

// app title logic
const appTitle = 'My amazing app';
onMounted(() => {
  console.log('on mounted - app title');
  console.log('app title ref', appTitleRef)
})

//methods
const increaseCounter = (amount, ev) => {
  console.log('event', ev)
  counterData.count +=amount;
  nextTick(() => {
    console.log('do something when counter has updated')
  }) 
}
const decreaseCounter = () => {
  counterData.count--
}
onMounted(() => {
  console.log('on mounted - count');
})
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
//hooks
onBeforeMount(() => {
  console.log('on before mount')
})
onMounted(() => {
  console.log('on mounted');
})
onBeforeUnmount(() => {
  console.log('on before unmount')
})
onUnmounted(() => {
  console.log('on unmounted')
})
onActivated(() => {
  console.log('on activated')
})
onDeactivated(() => {
  console.log('on deactivated')
})
onBeforeUpdate(() => {
  console.log('on before update')
})
onUpdated(()=>{
console.log('on updated')
})

/* 
directives
*/
// const vAutofocus = {
//   mounted: (el) => {
//     el.focus();
//   }
// } //v-autofocus

const appTitleRef = ref(null);
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
