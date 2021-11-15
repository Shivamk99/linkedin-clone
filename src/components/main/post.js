import React from "react";

import { MdMoreHoriz } from "react-icons/md";
import { RiEarthFill } from "react-icons/ri";
import { BiLike, BiCommentDetail } from "react-icons/bi";
import { RiShareForwardLine, RiSendPlaneFill } from "react-icons/ri";

import { Box, Center, Divider, Flex, Spacer, Text } from "@chakra-ui/layout";
import styles from "./main.module.css";
import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import {
  Popover,
  PopoverBody,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/popover";

const Post = ({ user }) => {
  return (
    <Box
      key={user.id}
      width="100%"
      // minHeight="500px"
      background="white"
      borderRadius="7px"
      border="1px solid #dfdfdf"
      mb="2"
      pl="1"
      pr="1"
    >
      <Flex alignItems="center">
        <Text
          display="flex"
          alignItems="center"
          fontSize="13"
          cursor="pointer"
          color="gray.800"
          fontWeight="medium"
          ml="2"
        >
          matin turkaman
          <Text ml="2" fontSize="12" color="gray.500">
            likes this
          </Text>
        </Text>
        <Spacer />
        <Box
          width="30px"
          height="30px"
          borderRadius="50"
          padding="0"
          as="a"
          _hover={{ bg: "#ebebeb" }}
          transition="ease-in-out .1s"
        >
          <MdMoreHoriz fontSize="30px" className={styles.moreIcon} />
        </Box>
      </Flex>
      <Flex justifyContent="center" mt="1">
        <Divider width="96%" />
      </Flex>

      <Flex>
        <Avatar
          name="ali turkaman"
          src={user.profile}
          ml="3"
          mt="3"
          cursor="pointer"
        />
        <Box mt="2.5" ml="2">
          <Text
            fontSize="15px"
            fontWeight="medium"
            color="#414141"
            display="flex"
            alignItems="center"
            cursor="pointer"
          >
            {user.name} <b>.</b>{" "}
            <Text
              cursor="pointer"
              fontSize="14px"
              ml="1"
              color="#a7a7a7"
              fontWeight="light"
            >
              2ed
            </Text>
          </Text>
          <Text cursor="pointer" fontSize="12" color="#a7a7a7" mt="-1">
            {user.headline}
          </Text>
          <Text
            display="flex"
            alignItems="center"
            fontSize="12"
            color="#a7a7a7"
            mt="-1"
            cursor="pointer"
          >
            {user.date} <b className={styles.dot}>.</b>{" "}
            <RiEarthFill className={styles.earthIcon} />{" "}
          </Text>
        </Box>
      </Flex>

      <Box padding="4">
        <Text
          id={user.lang ? styles.rtl : styles.ltr}
          className={styles.description}
        >
          {user.desc}
        </Text>
      </Box>

      <Button
        padding="2"
        as="a"
        fontSize="13px"
        height="25px"
        ml="2"
        mb="2"
        bg="transparent"
        color="#0a74dd"
        fontWeight="medium"
        _hover={{ bg: "#e7f3ff" }}
        cursor="pointer"
      >
        See translation
      </Button>

      <Box width="100%">
        <Image
          width="100%"
          src={user.image}
          fallbackSrc="https://static.wikia.nocookie.net/animated_inanimate_battle/images/a/a3/Image-not-found.png/revision/latest?cb=20200723230444"
        />
      </Box>

      <Flex mt="2" pl="3" pr="3">
        <Box display="flex" alignItems="center">
          <img src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" />
          <Text
            fontSize="12"
            mt="-1"
            ml="1"
            color="#777777"
            _hover={{ color: "blue.500", textDecoration: "underline" }}
            cursor="pointer"
          >
            matin turkaman and 97 others
          </Text>
        </Box>
        <Spacer />
        <Text
          fontSize="12"
          mt="-1"
          color="#777777"
          _hover={{ color: "blue.500", textDecoration: "underline" }}
          cursor="pointer"
        >
          124 comments
        </Text>
      </Flex>

      <Flex justifyContent="center" mt="1">
        <Divider width="96%" />
      </Flex>

      <Box display="flex" alignItems="center" justifyContent="center">
        <Popover trigger="hover" placement="top" placement="top-start">
          <PopoverTrigger>
            <Button
              as="a"
              cursor="pointer"
              flex="1"
              margin="2"
              background="transparent"
              _hover={{ background: "#ecececea" }}
              leftIcon={<BiLike fontSize="20px" className={styles.iconColor} />}
            >
              <Text color="#6d6d6d" ml="1">
                Like
              </Text>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            as="a"
            borderRadius="50px"
            shadow="2px 2px 5px #636363ea"
            width="100"
          >
            <PopoverBody>
              <Flex alignItems="center" justifyContent="center">
                <Center w="40px">
                  <Image
                    className={styles.hoverLikes}
                    p="1"
                    src="https://static-exp1.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l"
                    transition=".3s"
                  />
                </Center>
                <Center w="40px">
                  <Image
                    className={styles.hoverLikes}
                    p="1"
                    src="https://static-exp1.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo"
                    transition=".3s"
                  />
                </Center>
                <Center w="40px">
                  <Image
                    className={styles.hoverLikes}
                    p="1"
                    src="https://static-exp1.licdn.com/sc/h/9whrgl1hq2kfxjqr9gqwoqrdi"
                    transition=".3s"
                  />
                </Center>
                <Center w="40px">
                  <Image
                    className={styles.hoverLikes}
                    p="1"
                    src="https://static-exp1.licdn.com/sc/h/asmf650x603bcwgefb4heo6bm"
                    transition=".3s"
                  />
                </Center>
                <Center w="40px">
                  <Image
                    className={styles.hoverLikes}
                    p="1"
                    src="https://static-exp1.licdn.com/sc/h/39axkb4qe8q95ieljrhqhkxvl"
                    transition=".3s"
                  />
                </Center>

                <Center w="40px">
                  <Image
                    className={styles.hoverLikes}
                    p="1"
                    src="https://static-exp1.licdn.com/sc/h/1z80ze8ler6arc76a8rxsgqbh"
                    transition=".3s"
                  />
                </Center>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Button
          flex="1.5"
          margin="2"
          as="a"
          background="transparent"
          _hover={{ background: "#ecececea" }}
          leftIcon={
            <BiCommentDetail fontSize="20px" className={styles.iconColor} />
          }
        >
          <Text color="#6d6d6d" ml="1">
            Comment
          </Text>
        </Button>

        <Button
          flex="1"
          margin="2"
          as="a"
          background="transparent"
          _hover={{ background: "#ecececea" }}
          leftIcon={
            <RiShareForwardLine fontSize="20px" className={styles.iconColor} />
          }
        >
          <Text color="#6d6d6d" ml="1">
            Share
          </Text>
        </Button>

        <Button
          display={{ base: "none",sm: 'flex', md: "flex", xl: "flex" }}
          flex="1"
          margin="2"
          as="a"
          background="transparent"
          _hover={{ background: "#ecececea" }}
          leftIcon={
            <RiSendPlaneFill fontSize="20px" className={styles.iconColor} />
          }
        >
          <Text color="#6d6d6d" ml="1">
            Send
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Post;
