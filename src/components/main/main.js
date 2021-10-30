
import { Box, Divider, Flex } from "@chakra-ui/layout";

import React from "react";
import CreatePost from "./createPost";
import styles from "./main.module.css";
import users from "../../db/users";

import { MdOutlineArrowDropDown } from "react-icons/md";
import Post from "./post";

const Main = () => {
  return (
    <Box bg="#f3f2ef" width="48%" height="800px">
      <CreatePost />
      <Flex alignItems="center" mt="2">
        <Divider mr="2" flex="1" borderColor="#a8a8a8" />
        <p className={styles.sortText} flex="1">
          Sort by <b className={styles.boldText}> Recent</b>{" "}
          <MdOutlineArrowDropDown fontSize="20" />
        </p>
      </Flex>
      {users.map((user)=> {
        return <Post user={user} />
      })}
    </Box>
  );
};

export default Main;