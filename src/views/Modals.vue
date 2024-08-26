<template>
    <div class="modals">  
        <h1>Modals</h1>
        <button @click="showModal=true">Show modal</button>
        <Modal v-if="showModal" title="Cool title">
            <!-- <template v-slot:title>My new title</template> -->
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores! Hic voluptates deleniti ab deserunt ea ut quo, optio distinctio provident. Ipsa in aliquid corrupti commodi, facilis reiciendis numquam. Dicta!</p>
        </Modal>
        </div>

</template>

<script setup>
import {ref} from 'vue';
import Modal from '@/components/Modal.vue';

const showModal = ref(false);
</script>

<!-- <script>
import Modal from '@/components/Modal.vue';

export default {
    components: {
        Modal
    }
}
</script> -->
