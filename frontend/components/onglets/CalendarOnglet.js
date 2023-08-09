import React from "react";
import OngletMain from "../OngletMain";
import Iframe from "react-iframe";

export default function CalendarOnglet() {
  return (
    <OngletMain>
      <Iframe
        height="100%"
        width="100%"
        src="https://fr.resaclick.net/features/pro/proPublic/iframe/agenda.php?v=7597_9Gy1qhnskBmxXOj7drvJ&bgColor=white"
      ></Iframe>
    </OngletMain>
  );
}
