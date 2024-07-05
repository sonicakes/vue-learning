<template>
    <div class="modals">  
        <h1>Modals</h1>
        <button @click="showModal=true">Show modal</button>
    <teleport to=".modals-container">
        <div class="modal" v-if="showModal">
            <h2>This is modal</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores! Hic voluptates deleniti ab deserunt ea ut quo, optio distinctio provident. Ipsa in aliquid corrupti commodi, facilis reiciendis numquam. Dicta!</p>
            <button @click="showModal=false">Close modal</button>
        </div>
    </teleport>
        </div>

</template>

<script setup>
import {ref} from 'vue';
const showModal = ref(false);
</script>
<style scoped>
.modal {
    background: beige;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>