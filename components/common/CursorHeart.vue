<template>

<div>

<span

v-for="heart in hearts"

:key="heart.id"

class="cursor-heart"

:style="{

left:heart.x+'px',

top:heart.y+'px'

}"

>

❤️

</span>

</div>

</template>

<script setup lang="ts">

const hearts=ref<any[]>([])

let id=0

onMounted(()=>{

window.addEventListener('mousemove',(e)=>{

const item={

id:id++,

x:e.clientX,

y:e.clientY

}

hearts.value.push(item)

setTimeout(()=>{

hearts.value.shift()

},700)

})

})

</script>

<style scoped>

.cursor-heart{

position:fixed;

pointer-events:none;

animation:fly .7s linear forwards;

font-size:18px;

}

@keyframes fly{

100%{

transform:translateY(-50px) scale(1.8);

opacity:0;

}

}

</style>