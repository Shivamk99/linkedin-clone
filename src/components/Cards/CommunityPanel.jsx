import {
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { BiGroup, BiCalendarEvent } from "react-icons/bi";

import { community_recents } from "../../data/community";
import Card from "../Common/Card";

export default function CommunityPanel({ show }) {
  return (
    <Card
      display={{
        base: show ? "block" : "none",
        md: "block",
        lg: "block",
        xl: "block",
      }}
    >
      <Accordion userSelect="none" defaultIndex={[0, 1, 2]} allowMultiple>
        <CustomizedAccordionItem title="Recent" items={community_recents} />
        <CustomizedAccordionItem
          title="Groups"
          items={community_recents.filter((i) => i.type === "group")}
        />
        <CustomizedAccordionItem
          title="Events"
          items={community_recents.filter((i) => i.type === "event")}
        />
      </Accordion>
      <Box
        as="a"
        py="2"
        px="4"
        d="block"
        fontSize="sm"
        color="gray.600"
        userSelect="none"
        textAlign="center"
        href="/my-network/discover-hub"
        _hover={{ bg: "gray.50" }}
      >
        Discover more
      </Box>
    </Card>
  );
}

function CustomizedAccordionItem({ title, items }) {
  return (
    <AccordionItem borderTopWidth="0">
      <h2>
        <AccordionButton _focus={{ outline: "none" }}>
          <Box
            flex="1"
            color="blue.500"
            textAlign="left"
            fontSize="sm"
            fontWeight="semibold"
          >
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel p="0" pb={4}>
        <List>
          {items.map(({ id, type, title }) => (
            <ListItem
              as="a"
              d="flex"
              py="1.5"
              px="4"
              key={id}
              color="gray.600"
              _hover={{ bg: "gray.50" }}
              href={type === "group" ? `/groups/${id}` : `/events/${id}`}
            >
              <ListIcon as={type === "group" ? BiGroup : BiCalendarEvent} />
              <Text
                w="full"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                fontSize="xs"
                fontWeight="semibold"
              >
                {title}
              </Text>
            </ListItem>
          ))}
        </List>
      </AccordionPanel>
    </AccordionItem>
  );
}
