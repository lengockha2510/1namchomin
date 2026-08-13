<template>

<div>

<span

v-for="n in 25"

:key="n"

class="spark"

:style="style()"

>

✨

</span>

</div>

</template>

<script setup>

const style=()=>({

left:Math.random()*100+"%",

top:Math.random()*100+"%",

animationDelay:Math.random()*5+"s",

animationDuration:3+Math.random()*3+"s"

})

</script>

<style scoped>

.spark{

position:fixed;

animation:spark infinite;

pointer-events:none;

opacity:.8;

}

@keyframes spark{

0%{

transform:scale(.3);

opacity:0;

}

50%{

opacity:1;

}

100%{

transform:scale(2);

opacity:0;

}

}

</style>