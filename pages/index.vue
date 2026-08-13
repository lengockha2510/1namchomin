<template>
  <div>
    <Loading />

    <CursorHeart />

    <BackgroundParticle />

    <FloatingHeart />

    <Navbar />

    <Hero />

    <Countdown />

    <Timeline />

    <Gallery />

    <Letter />

    <MusicPlayer />
  </div>
</template>

<script setup lang="ts">
import Loading from '~/components/common/Loading.vue'
import CursorHeart from '~/components/common/CursorHeart.vue'
import MusicPlayer from '~/components/common/MusicPlayer.vue'

import BackgroundParticle from '~/components/effects/BackgroundParticle.vue'
import FloatingHeart from '~/components/effects/FloatingHeart.vue'

import Navbar from '~/components/layout/Navbar.vue'

import Hero from '~/components/home/Hero.vue'
import Countdown from '~/components/home/Countdown.vue'
import Timeline from '~/components/home/Timeline.vue'
import Gallery from '~/components/home/Gallery.vue'
import Letter from '~/components/home/Letter.vue'
</script>