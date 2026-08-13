<template>

<section id="timeline" class="timeline-section">

    <div class="container">

        <h2
            class="title"
            data-aos="fade-up"
        >
            Our Journey
        </h2>

        <div class="timeline">

            <div
                v-for="(item,index) in timeline"
                :key="item.id"
                class="timeline-item"
                :class="{reverse:index%2!==0}"
                data-aos="fade-up"
            >

                <div class="content">

                    <img
                        :src="item.image"
                        :alt="item.title"
                    >

                    <div class="text">

                        <span class="date">

                            {{item.date}}

                        </span>

                        <h3>

                            {{item.title}}

                        </h3>

                        <p>

                            {{item.description}}

                        </p>

                    </div>

                </div>

                <div class="dot">

                    ❤️

                </div>

            </div>

        </div>

    </div>

</section>

</template>

<script setup lang="ts">

import { timeline } from '~/data/timeline'

</script>

<style scoped>

.timeline-section{

background:#fff8fb;

padding:120px 0;

overflow:hidden;

}

.timeline{

position:relative;

margin-top:80px;

}

.timeline::before{

content:"";

position:absolute;

left:50%;

top:0;

bottom:0;

width:4px;

background:#ffd0dc;

transform:translateX(-50%);

}

.timeline-item{

display:flex;

justify-content:flex-start;

position:relative;

margin-bottom:90px;

}

.timeline-item.reverse{

justify-content:flex-end;

}

.content{

width:45%;

background:#fff;

border-radius:24px;

overflow:hidden;

box-shadow:0 20px 45px rgba(0,0,0,.08);

transition:.35s;

}

.content:hover{

transform:translateY(-8px);

}

.content img{

width:100%;

height:280px;

object-fit:cover;

display:block;

}

.text{

padding:25px;

}

.date{

display:inline-block;

margin-bottom:12px;

color:#ff4d6d;

font-weight:600;

}

.text h3{

font-size:28px;

margin-bottom:15px;

}

.text p{

line-height:1.8;

color:#666;

}

.dot{

position:absolute;

left:50%;

top:50%;

transform:translate(-50%,-50%);

width:60px;

height:60px;

border-radius:50%;

background:#ff4d6d;

display:flex;

align-items:center;

justify-content:center;

font-size:28px;

color:white;

box-shadow:0 10px 30px rgba(255,77,109,.35);

z-index:2;

}

@media(max-width:900px){

.timeline::before{

left:28px;

}

.timeline-item,

.timeline-item.reverse{

justify-content:flex-start;

padding-left:80px;

}

.content{

width:100%;

}

.dot{

left:28px;

}

}

</style>