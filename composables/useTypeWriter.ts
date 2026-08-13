export const useTypeWriter = (
  text: string,
  speed = 35
) => {

  const output = ref('')

  let index = 0

  const start = () => {

    output.value = ''

    index = 0

    const timer = setInterval(() => {

      output.value += text[index]

      index++

      if (index >= text.length) {
        clearInterval(timer)
      }

    }, speed)

  }

  return {
    output,
    start
  }

}