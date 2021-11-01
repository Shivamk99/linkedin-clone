import { Box, Container, HStack } from "@chakra-ui/react"

import Main from "./components/main/main"
import Header from "./components/header/header"
import LeftSideBar from "./components/Home/LeftSideBar"
import RightSideBar from "./components/rightSideBar/rightSideBar"

export default function App() {
  return (
    <Box bg="#f3f2ef">
      <Header />
      <Container maxW="container.xl">
        <HStack spacing="6" alignItems="flex-start">
          <LeftSideBar />
          <Main />
          <RightSideBar />
        </HStack>
      </Container>
    </Box>
  )
}
