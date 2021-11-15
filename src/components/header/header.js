import { Box, Circle, Container, Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import styles from "./header.module.css";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Avatar } from "@chakra-ui/avatar";
import { GrLinkedin } from "react-icons/gr";
import { ImHome3 } from "react-icons/im";
import { MdGroup } from "react-icons/md";
import { FaToolbox } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { RiNotification3Fill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";
import { Divider } from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/hooks";
import DrawerComp from "./Drawer";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles.container}>
      <Container
        maxW="container.xl"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        pr="60px"
        pl="30px"
      >
        <Flex alignItems="center">
          <GrLinkedin color="#0a66c2" cursor="pointer" fontSize="34px" />
          <InputGroup>
            <InputLeftElement
              marginLeft="15px"
              pointerEvents="none"
              children={<BiSearch />}
            />
            <Input
              marginLeft="8px"
              width={{ base: "10px", md: "10", lg: "280px", xl: "280px" }}
              bg={{ base: "", md: "transparent", lg: "#eef3f8", xl: "#eef3f8" }}
              height="35px"
              variant="filled"
              placeholder="Search"
              _placeholder={{
                color: "gray.500",
                fontSize: "14px",
              }}
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              _focus={{
                width: ["200px", "0px", "300px", "330px"],
              }}
            />
          </InputGroup>
        </Flex>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            cursor="pointer"
            marginRight="25px"
          >
            <Circle
              marginBottom="27px"
              marginLeft="20px"
              position="absolute"
              size="15px"
              bg="red.500"
              color="white"
            >
              <Circle size="5px" bg="white" color="white"></Circle>
            </Circle>
            <ImHome3 fontSize="25px" color="black" />
            <Box flexDirection="row">
              <Text
                display={{
                  base: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                }}
                fontSize="14px"
              >
                Home
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            cursor="pointer"
            marginRight="25px"
          >
            <MdGroup fontSize="25px" color="#636363" />
            <Box flexDirection="row">
              <Text
                display={{
                  base: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                }}
                fontSize="14px"
              >
                My network
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            cursor="pointer"
            marginRight="25px"
          >
            <FaToolbox fontSize="25px" color="#636363" />
            <Box flexDirection="row">
              <Text
                display={{
                  base: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                }}
                fontSize="14px"
              >
                Jobs
              </Text>
            </Box>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            cursor="pointer"
            marginRight="25px"
            display={{
              base: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            }}
          >
            <MdMessage fontSize="25px" color="#636363" />
            <Box flexDirection="row">
              <Text fontSize="14px">Messaging</Text>
            </Box>
          </Box>
          <Box
            display={{
              base: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            }}
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            cursor="pointer"
            marginRight="25px"
          >
            <RiNotification3Fill fontSize="25px" color="#636363" />
            <Box flexDirection="row">
              <Text
                display={{
                  base: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                }}
                fontSize="14px"
              >
                notifications
              </Text>
            </Box>
          </Box>
          <Box
            cursor="pointer"
            marginRight="15px"
            display={{
              base: "none",
              sm: "block",
              md: "block",
              lg: "block",
              xl: "block",
            }}
          >
            <Avatar
              size="xs"
              marginTop="5px"
              src="https://avatars.githubusercontent.com/u/79016171?v=4"
            />
            <Box display="flex" flexDirection="row">
              <Text
                display={{
                  base: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                }}
                fontSize="14px"
              >
                Me
              </Text>
              <Box
                display={{
                  base: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                }}
              >
                <MdArrowDropDown fontSize="25px" color="#636363" />
              </Box>
            </Box>
          </Box>
          <Stack
            direction="row"
            h="50px"
            pr={4}
            display={{
              base: "none",
              md: "block",
              lg: "block",
              xl: "block",
            }}
          >
            <Divider orientation="vertical" />
          </Stack>
          <Box cursor="pointer" onClick={onOpen}>
            <Box>
              <CgMenuGridR fontSize="30px" color="#636363" />
              <Box display="flex" flexDirection="row" cursor="pointer">
                <Text
                  display={{
                    base: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  }}
                  fontSize="14px"
                >
                  Work
                </Text>
                <Box
                  display={{
                    base: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  }}
                >
                  <MdArrowDropDown fontSize="25px" color="#636363" />
                </Box>
              </Box>
            </Box>
          </Box>
          <DrawerComp isOpen={isOpen} onClose={onClose} />
        </Box>
      </Container>
    </div>
  );
};

export default Header;
