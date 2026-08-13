<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modelValue"
        class="overlay"
        @click.self="$emit('close')"
      >
        <button
          class="close"
          @click="$emit('close')"
        >
          ✕
        </button>

        <img
          :src="image"
          class="photo"
        >
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">

defineProps<{
  modelValue:boolean
  image:string
}>()

defineEmits([
  "close"
])

</script>

<style scoped>

.overlay{

position:fixed;

inset:0;

background:rgba(0,0,0,.9);

display:flex;

justify-content:center;

align-items:center;

z-index:99999;

}

.photo{

max-width:90%;

max-height:90%;

border-radius:20px;

animation:zoom .35s;

}

.close{

position:absolute;

top:35px;

right:40px;

width:50px;

height:50px;

border:none;

border-radius:50%;

font-size:24px;

cursor:pointer;

background:white;

}

.fade-enter-active,
.fade-leave-active{

transition:.3s;

}

.fade-enter-from,
.fade-leave-to{

opacity:0;

}

@keyframes zoom{

from{

transform:scale(.8);

}

to{

transform:scale(1);

}

}

</style>