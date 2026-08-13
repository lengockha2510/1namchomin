<template>

<p class="typing">

{{ output }}

<span class="cursor">

|

</span>

</p>

</template>

<script setup lang="ts">

const props = defineProps<{

text:string

}>()

const {

output,

start

}=useTypeWriter(props.text)

onMounted(start)

</script>

<style scoped>

.typing{

white-space:pre-line;

font-size:20px;

line-height:2;

color:#555;

}

.cursor{

animation:blink .8s infinite;

}

@keyframes blink{

50%{

opacity:0;

}

}

</style>