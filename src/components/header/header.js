import { Box, Container, Text } from "@chakra-ui/react"

export default function Header() {
  return (
    <Box as="header" shadow="sm">
      <Container py="2" maxW="container.xl">
        <Text>Header</Text>
      </Container>
    </Box>
  )
}
