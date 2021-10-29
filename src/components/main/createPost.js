import React from "react";
import styles from "./main.module.css";
import { profile } from "../../db/profile";

import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { ImYoutube } from "react-icons/im";
import { BsCalendar2Date } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";

const CreatePost = () => {

  return (
    <Box className={styles.container}>
      <Flex alignItems="center">
        <Avatar
          cursor="pointer"
          ml="4"
          mt="3"
          name="ali turkaman"
          src={profile.profileImage}
        />
        <Box
          as="a"
          height="12"
          marginTop="3"
          marginLeft="2"
          marginRight="4"
          flex="1"
          background="white"
          border="1px solid #b3b3b3"
          borderRadius="50"
          cursor="pointer"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          color="gray.500"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          _hover={{ bg: "#ebedf0" }}
  
          _active={{
            bg: "#dadada",
            borderColor: "#bec3c9",
            color: "gray.700",
          }}
        >
          <Text ml="4">Start a post</Text>
        </Box>
      </Flex>

      <Flex mt="2">
        <Button
          mr="3"
          ml="3"
          flex=".9"
          bg="white"
          padding="18px 1px"
          as="a"
          cursor="pointer"
          _hover={{ bg: "#ebedf0" }}
        >
          <MdOutlinePhotoSizeSelectActual color="#70b5f9" fontSize="23" />
          <Text ml="3" color="gray.500">
            Photo
          </Text>
        </Button>
        <Button
          mr="3"
          ml="3"
          flex=".9"
          bg="white"
          padding="18px 1px"
          as="a"
          cursor="pointer"
          _hover={{ bg: "#ebedf0" }}
        >
          <ImYoutube fontSize="23" color="#7fc15e" />
          <Text ml="3" color="gray.500">
            video
          </Text>
        </Button>
        <Button
          mr="3"
          ml="3"
          flex=".9"
          bg="white"
          padding="18px 1px"
          as="a"
          cursor="pointer"
          _hover={{ bg: "#ebedf0" }}
        >
          <BsCalendar2Date color="#e7a33e" fontSize="23" />
          <Text ml="3" color="gray.500">
            Event
          </Text>
        </Button>
        <Button
          mr="3"
          ml="3"
          flex="1.3"
          bg="white"
          padding="18px 1px"
          as="a"
          cursor="pointer"
          _hover={{ bg: "#ebedf0" }}
        >
          <RiArticleLine color="#fc9295" fontSize="23" />
          <Text ml="3" color="gray.500">
            Write article
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default CreatePost;
