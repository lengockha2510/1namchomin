import AOS from 'aos'

export default defineNuxtPlugin(() => {

    onNuxtReady(() => {

        AOS.init({

            duration: 1200,

            once: true,

            easing: 'ease-in-out'

        })

    })

})