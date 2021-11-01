import { VStack } from "@chakra-ui/react"

import FeedIdentity from "../Cards/FeedIdentity"
import CommunityPanel from "../Cards/CommunityPanel"

export default function LeftSideBar() {
  return (
    <VStack w="56">
      <FeedIdentity />
      <CommunityPanel />
    </VStack>
  )
}
