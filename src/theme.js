import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    styles: {
        global: {
          // styles for the `body`
          body: {
            bg: 'blackAlpha.900',
            color: 'white',
          },
        }
    }
  })

export default theme