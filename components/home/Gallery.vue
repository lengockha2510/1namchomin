<template>

<section
id="gallery"
class="gallery-section">

<div class="container">

<h2
class="title"
data-aos="fade-up">

Our Gallery

</h2>

<div class="grid">

<div
v-for="item in gallery"
:key="item.id"
class="card"
@click="open(item.image)"
data-aos="zoom-in">

<img
:src="item.image"
:alt="item.title">

<div class="mask">

<h3>

{{item.title}}

</h3>

</div>

</div>

</div>

</div>

<ImageModal

:model-value="show"

:image="current"

@close="show=false"

/>

</section>

</template>

<script setup lang="ts">

import { gallery } from '~/data/gallery'

import ImageModal from '~/components/common/ImageModal.vue'

const show=ref(false)

const current=ref('')

const open=(img:string)=>{

current.value=img

show.value=true

}

</script>

<style scoped>

.gallery-section{

background:white;

padding:120px 0;

}

.grid{

columns:3 300px;

column-gap:22px;

margin-top:60px;

}

.card{

position:relative;

margin-bottom:22px;

cursor:pointer;

overflow:hidden;

border-radius:20px;

break-inside:avoid;

}

.card img{

width:100%;

display:block;

transition:.5s;

}

.card:hover img{

transform:scale(1.08);

filter:brightness(.75);

}

.mask{

position:absolute;

inset:0;

display:flex;

justify-content:center;

align-items:center;

opacity:0;

transition:.35s;

background:rgba(255,77,109,.2);

}

.card:hover .mask{

opacity:1;

}

.mask h3{

color:white;

font-size:28px;

font-family:"Dancing Script";

}

</style>