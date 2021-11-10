import {
  Avatar,
  Image,
  Box,
  Link,
  Flex,
  HStack,
  VStack,
  Text
} from "@chakra-ui/react"
import { BsBookmarkFill } from "react-icons/bs"

import { profile } from "../../db/profile"

import Card from "../Common/Card"

export default function FeedIdentity() {
  return (
    <Card>
      <VStack p="2" position="relative">
        <Image
          position="absolute"
          top="0"
          left="0"
          right="0"
          h="14"
          src={profile.header}
          alt="Programming is thinking not typing"
        />
        <Link href="/in/ali-turkaman">
          <Avatar
            p="0.5"
            bg="white"
            size="lg"
            name="Ali Turkaman"
            src={profile.profileImage}
          />
        </Link>
        <VStack spacing="0">
          <Link
            href="/in/ali-turkaman"
            fontSize="sm"
            fontWeight="semibold"
            color="gray.800"
          >
            {profile.name}
          </Link>
          <Text color="gray.500" fontSize="xs">
            {profile.headline}
          </Text>
        </VStack>
      </VStack>
      <Box
        py="2"
        as="ul"
        borderStyle="solid"
        borderColor="gray.200"
        borderTopWidth="1px"
        borderBottomWidth="1px"
      >
        <Box as="li">
          <Flex
            as="a"
            py="1"
            px="4"
            fontSize="xs"
            userSelect="none"
            justifyContent="space-between"
            href="/me/profile-views"
            _hover={{ bg: "gray.50" }}
          >
            <Text color="gray.500" fontWeight="semibold">
              Who viewed your profile
            </Text>
            <Text color="blue.500" fontWeight="semibold">
              520
            </Text>
          </Flex>
        </Box>
        <Box as="li">
          <Flex
            as="a"
            py="1"
            px="4"
            fontSize="xs"
            userSelect="none"
            justifyContent="space-between"
            href="/in//ali-turkaman/detail/recent-activity/shares"
            _hover={{ bg: "gray.50" }}
          >
            <Text color="gray.500" fontWeight="semibold">
              Views of your post
            </Text>
            <Text color="blue.500" fontWeight="semibold">
              2,243
            </Text>
          </Flex>
        </Box>
      </Box>
      <HStack
        as="a"
        py="2"
        px="4"
        fontSize="xs"
        color="gray.600"
        href="/my-items"
        userSelect="none"
        _hover={{ bg: "gray.50" }}
      >
        <BsBookmarkFill />
        <span>My Items</span>
      </HStack>
    </Card>
  )
}
