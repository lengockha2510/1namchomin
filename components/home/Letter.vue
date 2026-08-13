<template>

<section
id="letter"
class="letter-section">

<div class="container">

<h2
class="title"
data-aos="fade-up">

A Letter For You

</h2>

<div
class="envelope"
:class="{open}"

@click="open=true">

<div class="cover"></div>

<div class="paper">

<TypeWriter
v-if="open"
:text="letter"/>

</div>

</div>

</div>

</section>

</template>

<script setup lang="ts">

import TypeWriter from '~/components/common/TypeWriter.vue'

const open=ref(false)

const letter=`

Em à,

Cảm ơn em vì đã xuất hiện trong cuộc đời anh.

Từng ngày bên em đều trở thành một kỷ niệm đẹp.

Dù sau này có bao nhiêu khó khăn,

anh vẫn muốn nắm tay em và đi hết chặng đường.

Yêu em ❤️

`

</script>

<style scoped>

.letter-section{

padding:120px 0;

background:#fff8fb;

}

.envelope{

width:700px;

height:450px;

margin:auto;

position:relative;

cursor:pointer;

perspective:1000px;

}

.cover{

position:absolute;

width:100%;

height:100%;

background:#ff4d6d;

clip-path:polygon(0 0,100% 0,50% 60%);

transition:.8s;

transform-origin:top;

z-index:2;

}

.envelope.open .cover{

transform:rotateX(180deg);

}

.paper{

position:absolute;

left:50%;

top:30px;

transform:translateX(-50%);

width:88%;

height:390px;

background:white;

padding:40px;

border-radius:12px;

box-shadow:0 20px 40px rgba(0,0,0,.15);

transition:.8s;

overflow:auto;

}

.envelope.open .paper{

top:-100px;

}

@media(max-width:768px){

.envelope{

width:95%;

height:360px;

}

.paper{

height:320px;

padding:25px;

}

}

</style>