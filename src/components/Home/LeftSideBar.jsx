import { useState } from "react";

import FeedIdentity from "../Cards/FeedIdentity";
import CommunityPanel from "../Cards/CommunityPanel";

import { VStack, Button,Flex } from "@chakra-ui/react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function LeftSideBar() {
  const [show, setShow] = useState(false);

  return (
    <VStack
      width={{ base: "full", md: "44", xl: "56" }}
      mb={{ base: "10px", lg: "0", xl: "0" }}
      display={{ base: "none", sm: "block", md: "block", xl: "block" }}
    >
      <FeedIdentity />
      <CommunityPanel show={show} />
      <Flex w="full" display={{base: 'block',md:"none", lg: 'none', xl:'none'}} >
      <Button
        height="6"
        rounded="0"
        color="gray.600"
        fontSize="14"
        _hover={{ bg: "#dad8d5" }}
        rightIcon={
          show ? (
            <MdKeyboardArrowUp color="#4A5568" fontSize="25px" />
            ) : (
            <MdKeyboardArrowDown color="#4A5568" fontSize="25px" />
          )
        }
        as="a"
        width="full"
        bg="transparent"
        cursor="pointer"
        onClick={() => (!show ? setShow(true) : setShow(false))}
      >
        Show {show ? "Less" : "More"}
      </Button>
      </Flex>
    </VStack>
  );
}
