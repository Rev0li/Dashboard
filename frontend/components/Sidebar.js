import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiSettings,
  FiTag,
  FiShoppingCart,
  FiHelpCircle,
} from "react-icons/fi";
import NavItem from "./NavItem";

export default function Sidebar({ fnHandleNavItem, coActive }) {
  const [navSize, changeNavSize] = useState("large");

  return (
    <Flex
      borderRadius={navSize == "small" ? "15px" : "35px"}
      width={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent={"space-between"}
      bg={"#F1f1f1"}
      m={3}
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          description="This is the description for the dashboard."
          active={coActive === "Dashboard"}
          onClick={() => fnHandleNavItem("Dashboard")} // Passer directement le titre ici
        />
        <NavItem
          navSize={navSize}
          icon={FiCalendar}
          title="Calendar"
          active={coActive === "Calendar"}
          onClick={() => fnHandleNavItem("Calendar")} // Passer directement le titre ici
        />

        <NavItem
          navSize={navSize}
          icon={FiUser}
          title="Clients"
          active={coActive === "Clients"}
          onClick={() => fnHandleNavItem("Clients")} // Passer directement le titre ici
        />
        <NavItem
          navSize={navSize}
          icon={FiTag}
          title="Product"
          active={coActive === "Product"}
          onClick={() => fnHandleNavItem("Product")} // Passer directement le titre ici
        />
        <NavItem
          navSize={navSize}
          icon={FiShoppingCart}
          title="Facture"
          active={coActive === "Facture"}
          onClick={() => fnHandleNavItem("Facture")} // Passer directement le titre ici
        />
        <NavItem
          navSize={navSize}
          icon={FiHelpCircle}
          title="S.A.V"
          active={coActive === "S.A.V"}
          onClick={() => fnHandleNavItem("S.A.V")} // Passer directement le titre ici
        />
        <NavItem
          navSize={navSize}
          icon={FiSettings}
          title="Settings"
          active={coActive === "Settings"}
          onClick={() => fnHandleNavItem("Settings")} // Passer directement le titre ici
        />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              SOliver
            </Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
