import { Container, HStack, Flex } from "@chakra-ui/react";

import Main from "./components/main/main";
import Header from "./components/header/header";
import LeftSideBar from "./components/Home/LeftSideBar";
import RightSideBar from "./components/rightSideBar/rightSideBar";

import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
})

const theme = extendTheme({ breakpoints })

export default function App() {
  return (
    <>
      <Header />
      <Container
        maxW="container.xl"
        mt={{ base: "5", md: "5", lg: "12", xl: "12" }}
        p={{ base: "0", md: "3", lg: "3", xl: "3" }}
      >
        <Flex justifyContent="center">
        <HStack
          flexDirection={{ base: "column", md: "row", lg: "row", xl: "row" }}
          spacing={{ base: "0", md: "5", lg: "5", xl: "5" }}
          alignItems="flex-start"
          justifyContent="center"
          w={{base: 'full', sm: '82%', lg: 'full', xl: 'full'}}
        >
          <LeftSideBar />
          <Main />
          <RightSideBar />
        </HStack>
        </Flex>
      </Container>
    </>
  );
}
