<template>
    <BackgroundParticle/>

<Sparkle/>

<FloatingHeartCanvas/>

<section class="hero">

    <div class="overlay"></div>

    <div class="heart-bg">
        <span
            v-for="n in 25"
            :key="n"
            class="heart"
            :style="randomStyle()"
        >
            ❤️
        </span>
    </div>

    <div class="container hero-content">

        <h2 class="sub">
            Welcome To
        </h2>

        <h1>
            Our Love Story
        </h1>

        <p>

            Every love story is beautiful,

            but ours is my favorite.

        </p>

        <button
            @click="scrollNext"
        >
            Start Journey
        </button>

    </div>

</section>

</template>

<script setup lang="ts">

const scrollNext=()=>{

window.scrollTo({

top:window.innerHeight,

behavior:'smooth'

})

}

const randomStyle=()=>{

return{

left:Math.random()*100+'%',

animationDelay:Math.random()*5+'s',

fontSize:(20+Math.random()*25)+'px',

animationDuration:(5+Math.random()*8)+'s'

}

}

</script>

<style scoped>

.hero{

height:100vh;

position:relative;

display:flex;

align-items:center;

justify-content:center;

overflow:hidden;

background:url('/images/bg.jpg') center/cover;

}

.overlay{

position:absolute;

inset:0;

background:rgba(0,0,0,.45);

}

.hero-content{

position:relative;

z-index:2;

text-align:center;

color:white;

}

.sub{

font-size:24px;

letter-spacing:4px;

margin-bottom:15px;

}

h1{

font-family:"Dancing Script";

font-size:90px;

margin-bottom:25px;

}

p{

max-width:650px;

margin:auto;

font-size:22px;

line-height:1.8;

}

button{

margin-top:45px;

padding:18px 45px;

border:none;

border-radius:50px;

background:#ff4d6d;

color:white;

font-size:18px;

cursor:pointer;

transition:.3s;

}

button:hover{

transform:translateY(-6px);

background:#ff7090;

}

.heart-bg{

position:absolute;

inset:0;

overflow:hidden;

}

.heart{

position:absolute;

bottom:-50px;

animation:heart linear infinite;

opacity:.6;

}

@keyframes heart{

0%{

transform:translateY(0) scale(.8);

opacity:0;

}

30%{

opacity:.9;

}

100%{

transform:translateY(-120vh) scale(1.8);

opacity:0;

}

}

@media(max-width:768px){

h1{

font-size:58px;

}

p{

font-size:17px;

}

}

</style>