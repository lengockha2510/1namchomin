<template>

<section

id="countdown"

class="countdown">

<div class="container">

<h2

class="title"

data-aos="fade-up">

Together Countdown

</h2>

<div

class="grid"

data-aos="zoom-in">

<div class="box">

<h1>{{day}}</h1>

<p>Days</p>

</div>

<div class="box">

<h1>{{hour}}</h1>

<p>Hours</p>

</div>

<div class="box">

<h1>{{minute}}</h1>

<p>Minutes</p>

</div>

<div class="box">

<h1>{{second}}</h1>

<p>Seconds</p>

</div>

</div>

</div>

</section>

</template>

<script setup lang="ts">

const{

day,

hour,

minute,

second

}=useCountdown()

</script>

<style scoped>

.countdown{

background:white;

}

.grid{

display:grid;

grid-template-columns:repeat(4,1fr);

gap:30px;

margin-top:60px;

}

.box{

padding:40px;

background:#fff8fb;

border-radius:20px;

text-align:center;

box-shadow:0 10px 25px rgba(0,0,0,.06);

}

.box h1{

font-size:70px;

color:#ff4d6d;

}

.box p{

margin-top:15px;

font-size:20px;

}

@media(max-width:768px){

.grid{

grid-template-columns:repeat(2,1fr);

}

.box h1{

font-size:45px;

}

}

</style>