export const useParallax = () => {

    const { x, y } = useMouse()

    const style = computed(() => ({

        transform: `translate(
            ${x.value * 0.02}px,
            ${y.value * 0.02}px
        )`

    }))

    return {

        style

    }

}