<template>

<canvas ref="canvas"></canvas>

</template>

<script setup lang="ts">
/// <reference lib="dom" />
import { onMounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)

let ctx!: CanvasRenderingContext2D

const hearts: any[] = []

onMounted(() => {

const c=canvas.value!

ctx=c.getContext("2d")!

resize()

window.addEventListener("resize",resize)

for(let i=0;i<80;i++){

hearts.push({

x:Math.random()*innerWidth,

y:Math.random()*innerHeight,

size:10+Math.random()*20,

speed:1+Math.random()*2

})

}

animate()

})

function resize(){

canvas.value!.width=innerWidth

canvas.value!.height=innerHeight

}

function animate(){

ctx.clearRect(0,0,innerWidth,innerHeight)

hearts.forEach(h=>{

ctx.font=h.size+"px serif"

ctx.fillText("❤️",h.x,h.y)

h.y-=h.speed

if(h.y<-50){

h.y=innerHeight+20

}

})

requestAnimationFrame(animate)

}

</script>

<style scoped>

canvas{

position:fixed;

inset:0;

pointer-events:none;

z-index:0;

}

</style>