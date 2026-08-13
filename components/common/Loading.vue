<template>

<div
v-if="loading"
class="loading">

<div class="loader"></div>

</div>

</template>

<script setup lang="ts">

const loading=ref(true)

onMounted(()=>{

setTimeout(()=>{

loading.value=false

},1800)

})

</script>

<style scoped>

.loading{

position:fixed;

inset:0;

background:#fff;

display:flex;

justify-content:center;

align-items:center;

z-index:9999;

}

.loader{

width:70px;

height:70px;

border:7px solid #ffd2dd;

border-top:7px solid #ff4d6d;

border-radius:50%;

animation:spin 1s linear infinite;

}

@keyframes spin{

100%{

transform:rotate(360deg);

}

}

</style>