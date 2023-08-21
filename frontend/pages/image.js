import React from "react";
import testImage from "/home/kientzler/Documents/Dev/Dashboard/frontend/components/img/gallery5.png"; // Assurez-vous que le chemin est correct
import Image from "next/image";
export default function image() {
  return (
    <div>
      <h1>Test d'affichage dimage</h1>
      <Image src={testImage} alt="Test Image" height={200} />
    </div>
  );
}
