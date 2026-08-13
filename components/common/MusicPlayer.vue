<template>

<div class="music">

<button @click="toggle">

{{playing?'🔊':'🔈'}}

</button>

<audio
ref="audio"
loop
src="/audio/love.mp3"
/>

</div>

</template>

<script setup lang="ts">

const audio=ref<HTMLAudioElement>()

const playing=ref(false)

const toggle=()=>{

if(!audio.value)return

if(playing.value){

audio.value.pause()

}else{

audio.value.play()

}

playing.value=!playing.value

}

</script>

<style scoped>

.music{

position:fixed;

right:30px;

bottom:30px;

z-index:999;

}

button{

width:58px;

height:58px;

border-radius:50%;

border:none;

font-size:26px;

background:#ff4d6d;

color:white;

cursor:pointer;

box-shadow:0 10px 30px rgba(0,0,0,.2);

}

</style>