import React from "react";
import styles from "./rightSideBar.module.css";

import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";

import { CgMathPlus } from "react-icons/cg";
import { Button } from "@chakra-ui/button";

const User = ({ userName, profile, headline, id }) => {
  return (
    <Box mt="14px" key={id} bg="white">
      <Flex>
        <Avatar name="Front-end Developer" src={profile} />
        <Box
          ml="2.5"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Text fontWeight="medium" fontSize="15px">
            {userName}
          </Text>
          <Text color="gray.600" fontSize="14px" mt="-1">
          {headline}
          </Text>
          <Button
            color="gray.700"
            leftIcon={<CgMathPlus />}
            width="97px"
            height="32px"
            border="1px solid gray"
            bg="white"
            as="a"
            cursor="pointer"
            borderRadius="50"
            _hover={{ bg: 'gray.300', border: '2px solid gray' }}
            mt="1"
          >
            <Text>Follow</Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default User;
