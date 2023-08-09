import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import SideBar from "../components/Sidebar";

import DashboardOnglet from "../components/onglets/DashboardOnglet";
import CalendarOnglet from "../components/onglets/CalendarOnglet";
import ClientOnglet from "../components/onglets/ClientOnglet";
import ProductOnglet from "../components/onglets/ProductOnglet";
import FactureOnglet from "../components/onglets/FactureOnglet";
import SAV from "../components/onglets/SAV";
import SettingOnglet from "../components/onglets/SettingOnglet";
const Home = () => {
  const [activeNavItem, setActiveNavItem] = useState("");

  const handleNavItemClick = (title) => {
    setActiveNavItem(title);
  };
  console.log(Flex);
  return (
    <Flex
      h={"100vh"}
      direction={"column"}
      justifyContent={"space-between"}
      backgroundColor="gray.500"
    >
      <Flex h={"100%"} margin={3}>
        <SideBar
          fnHandleNavItem={handleNavItemClick}
          coActive={activeNavItem}
        />
        {activeNavItem === "Dashboard" ? <DashboardOnglet /> : null}
        {activeNavItem === "Calendar" ? <CalendarOnglet /> : null}
        {activeNavItem === "Clients" ? <ClientOnglet /> : null}
        {activeNavItem === "Product" ? <ProductOnglet /> : null}
        {activeNavItem === "Facture" ? <FactureOnglet /> : null}
        {activeNavItem === "S.A.V" ? <SAV /> : null}
        {activeNavItem === "Settings" ? <SettingOnglet /> : null}
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="Center"
        bg="accent.100"
        w="100%"
        p={4}
        color="white"
      >
        This is the Flex <ConnectButton />
      </Flex>
    </Flex>
  );
};

export default Home;
