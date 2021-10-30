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
          src="https://media-exp1.licdn.com/dms/image/C4D16AQFmRVCtKXWWgg/profile-displaybackgroundimage-shrink_200_800/0/1630249932527?e=1640822400&v=beta&t=r2oHy2lQyLpu1SeNCxcEM9u_kTzisUBPd9PKzat0QrI"
          alt="Programming is thinking not typing"
        />
        <Link href="/in/neysimehdi">
          <Avatar
            p="0.5"
            bg="white"
            size="lg"
            name="Mehdi Neysi"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGHsLttzK7bYA/profile-displayphoto-shrink_100_100/0/1616651427716?e=1640822400&v=beta&t=DX8eDGH46hlR0qkvTQ8Qr-h-LKjrtQ8jpq27IVJ4lnA"
          />
        </Link>
        <VStack spacing="0">
          <Link
            href="/in/neysimehdi"
            fontSize="sm"
            fontWeight="semibold"
            color="gray.800"
          >
            Mehdi Neysi
          </Link>
          <Text color="gray.500" fontSize="xs">
            Frontend Developer at PANTOhealth
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
              782
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
            href="/in/neysimehdi/detail/recent-activity/shares"
            _hover={{ bg: "gray.50" }}
          >
            <Text color="gray.500" fontWeight="semibold">
              Views of your post
            </Text>
            <Text color="blue.500" fontWeight="semibold">
              6,342
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
