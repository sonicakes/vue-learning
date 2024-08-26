<template>
<teleport to=".modals-container">
    <div class="modal" >
        <!-- <h2><slot name="title"/></h2> -->
         <h1>{{ props.title }}</h1>
         <!-- or just title will work -->
        <slot />
        <button >Close modal</button>
    </div>
</teleport>
</template>

<script setup>
const props = defineProps({
    title: {
            type:String,
            default: 'Nothing'
        }
})
</script>

<!-- <script>
export default {
    props: {
        title: {
            type:String,
            default: 'Nothing'
        }
    }
}
</script> -->

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