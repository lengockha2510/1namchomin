<template>

<header class="navbar">

    <div class="container wrapper">

        <h2 class="logo">

            ❤️ Love

        </h2>

        <nav>

            <a href="#">Home</a>

            <a href="#countdown">Countdown</a>

            <a href="#timeline">Timeline</a>

            <a href="#gallery">Gallery</a>

            <a href="#letter">Letter</a>

        </nav>

    </div>

</header>

</template>

<style scoped>

.navbar{

position:fixed;

top:0;

left:0;

width:100%;

padding:20px 0;

z-index:999;

background:rgba(255,255,255,.1);

backdrop-filter:blur(18px);

}

.wrapper{

display:flex;

justify-content:space-between;

align-items:center;

}

.logo{

font-family:"Dancing Script";

font-size:40px;

color:white;

}

nav{

display:flex;

gap:35px;

}

nav a{

color:white;

text-decoration:none;

font-weight:500;

transition:.3s;

}

nav a:hover{

color:#ff89b5;

}

@media(max-width:768px){

nav{

display:none;

}

}

</style>