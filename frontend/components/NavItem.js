import React from "react";
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";

export default function NavItem({
  icon,
  title,
  description,
  active,
  navSize,
  onClick,
}) {
  return (
    <Flex mt={30} flexDir="column" w="100%" alignItems={"center"}>
      <Menu placement="right">
        <Link
          backgroundColor={active && "#6fa5b1"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#6fa5b1" }}
          w={navSize == "large" && "100%"}
          onClick={() => onClick()} // Passer le titre ici lorsqu'il est cliqué
        >
          <MenuButton w="100%" mt={2}>
            <Flex>
              <Icon
                className="icon-navItem"
                as={icon}
                fontSize="xl"
                color={active ? "gray.100" : "#4e6b9f"}
              />
              <Text
                ml={5}
                display={navSize == "small" ? "none" : "flex"}
                color={active ? "gray.100" : "#4e6b9f"}
              >
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
