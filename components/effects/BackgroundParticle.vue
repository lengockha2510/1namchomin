<template>

<div class="particle">

<span

v-for="i in 60"

:key="i"

class="dot"

:style="random()"

></span>

</div>

</template>

<script setup lang="ts">

const random=()=>({

left:Math.random()*100+"%",

top:Math.random()*100+"%",

animationDelay:Math.random()*10+"s",

animationDuration:8+Math.random()*10+"s",

width:2+Math.random()*6+"px",

height:2+Math.random()*6+"px"

})

</script>

<style scoped>

.particle{

position:fixed;

inset:0;

pointer-events:none;

overflow:hidden;

z-index:0;

}

.dot{

position:absolute;

border-radius:50%;

background:white;

opacity:.4;

animation:float infinite linear;

}

@keyframes float{

0%{

transform:translateY(50px);

opacity:0;

}

50%{

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

</style>