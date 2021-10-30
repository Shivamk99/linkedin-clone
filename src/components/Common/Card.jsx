import { Box } from "@chakra-ui/react"

export default function Card({ children, ...rest }) {
  return (
    <Box
      w="full"
      bg="white"
      rounded="md"
      overflow="hidden"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="gray.200"
      {...rest}
    >
      {children}
    </Box>
  )
}
