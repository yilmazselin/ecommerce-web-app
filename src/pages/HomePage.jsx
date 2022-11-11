import React from "react";
import CategoriesCardWrapper from "../components/CategoriesCardWrapper";
import Header from "../components/Header/Header";
import RecomendCardWrapper from "../components/RecommendCardWrapper";
import CampaignBanner from "../components/CampaignBanner";
import CampaignCardWrapper from "../components/Containers/CampaignCardWrapper";
import RegistraryBanner from "../components/RegistraryBanner";
import ProductsPage from "./ProductsPage";

export default function HomePage() {
  const homeCategories = [
    {
      id: 0,
      name: "OTURMA ODASI",
      img: "https://img.vivense.com/u1NUrSU-IyVUJji2oi831yQRNFA=/images/f35e06fb346f458d8a80a97299147bb0.jpg",
    },
    {
      id: 1,
      name: "ÇALIŞMA ODASI",
      img: "https://img.vivense.com/ZEYHs9N0hI_NL_jcJQJnUNPXN7M=/images/e4aea64ea24a4fe29ce5f7aa27e48c4e.jpg",
    },
    {
      id: 2,
      name: "YEMEK ODASI",
      img: "https://img.vivense.com/aQr-eP64Fy1TS4a8ScyQwmkKwe0=/images/363bafe78ccc40f5aab3465bf2ec825f.jpg",
    },
    {
      id: 3,
      name: "YATAK ODASI",
      img: "https://img.vivense.com/KWuABIAxAYu27QEEiAxubQ4zwZA=/images/f941e6fe5dbe47f3860688e301e9e570.jpg",
    },
  ];

  const recommendedItems = [
    {
      id: 0,
      name: "Lizbon Koltuk Takımı",
      price: "4.899 TL",
      img: "https://pictures.personaclick.com/resize-images/520/6d56967a1af15518987e8aa73f9e30/2826958747107065872.jpg",
    },
    {
      id: 1,
      name: "Tulip Köşe Koltuk, Koyu Gri",
      price: "13.790 TL",
      img: "https://pictures.personaclick.com/resize-images/520/6d56967a1af15518987e8aa73f9e30/2826958738156422089.jpg",
    },
    {
      id: 2,
      name: "Nano Full Ortopedik Yaylı Yatak, 90X190",
      price: "4.899 TL",
      img: "https://pictures.personaclick.com/resize-images/520/6d56967a1af15518987e8aa73f9e30/2826959646189683434.jpg",
    },
    {
      id: 3,
      name: "Trinty Sandalye, Kumaş Değiştirilebilir Sandalye",
      price: "1.604 TL",
      img: "https://pictures.personaclick.com/resize-images/520/6d56967a1af15518987e8aa73f9e30/2826958767113896366.jpg",
      netPrice: "1.800 TL",
    },
    {
      id: 4,
      name: "Lizbon Berjer, Antrasit",
      price: "4.899 TL",
      img: "https://pictures.personaclick.com/resize-images/520/6d56967a1af15518987e8aa73f9e30/2826958747107065875.jpg",
    },
  ];

  const campaignFirst = [
    {
      id: 0,
      name: "MUTFAK VE YEMEK MASA TAKIMI",
      img: "https://img.vivense.com/Pw_sgCkIMY8Kbt2AEhZEzv6mjNE=/images/7093b4ee5a644073a2e4692c5777be8f.jpg",
      subTitle: "999 TL'den Başlayan Fiyatlarla",
    },
    {
      id: 1,
      name: "SANDALYE BENCH",
      img: "https://img.vivense.com/Pw_sgCkIMY8Kbt2AEhZEzv6mjNE=/images/7093b4ee5a644073a2e4692c5777be8f.jpg",
      subTitle: "999 TL'den Başlayan Fiyatlarla",
    },
    {
      id: 2,
      name: "SOFRA MUTFAK",
      img: "https://img.vivense.com/Pw_sgCkIMY8Kbt2AEhZEzv6mjNE=/images/7093b4ee5a644073a2e4692c5777be8f.jpg",
      subTitle: "999 TL'den Başlayan Fiyatlarla",
    },
    {
      id: 3,
      name: "Mutfak ve Masa Takımı",
      img: "https://img.vivense.com/Pw_sgCkIMY8Kbt2AEhZEzv6mjNE=/images/7093b4ee5a644073a2e4692c5777be8f.jpg",
      subTitle: "999 TL'den Başlayan Fiyatlarla",
    },
  ];

  const bestSeller = [
    {
      id: 0,
      name: "Lora Yatak Odası",
      image:
        "https://img.vivense.com/FN3HpDBqN34BlK46PTLOP6QBlZQ=/images/67b12cb52c504558aa5848a191972dac.jpg",
      price: "12.240 TL",
    },
    {
      id: 1,
      name: "Lora Yatak Odası",
      image:
        "https://img.vivense.com/FN3HpDBqN34BlK46PTLOP6QBlZQ=/images/67b12cb52c504558aa5848a191972dac.jpg",
      price: "12.240 TL",
    },
    {
      id: 2,
      name: "Lora Yatak Odası",
      image:
        "https://img.vivense.com/FN3HpDBqN34BlK46PTLOP6QBlZQ=/images/67b12cb52c504558aa5848a191972dac.jpg",
      price: "12.240 TL",
    },
    {
      id: 3,
      name: "Lora Yatak Odası",
      image:
        "https://img.vivense.com/FN3HpDBqN34BlK46PTLOP6QBlZQ=/images/67b12cb52c504558aa5848a191972dac.jpg",
      price: "12.240 TL",
    },
    {
      id: 4,
      name: "Lora Yatak Odası",
      image:
        "https://img.vivense.com/FN3HpDBqN34BlK46PTLOP6QBlZQ=/images/67b12cb52c504558aa5848a191972dac.jpg",
      price: "12.240 TL",
    },
    {
      id: 5,
      name: "Lora Yatak Odası",
      image:
        "https://img.vivense.com/FN3HpDBqN34BlK46PTLOP6QBlZQ=/images/67b12cb52c504558aa5848a191972dac.jpg",
      price: "12.240 TL",
    },
    {
      id: 6,
      name: "Lora Yatak Odası",
      image:
        "https://img.vivense.com/FN3HpDBqN34BlK46PTLOP6QBlZQ=/images/67b12cb52c504558aa5848a191972dac.jpg",
      price: "12.240 TL",
    },
    {
      id: 7,
      name: "Lora Yatak Odası",
      image:
        "https://img.vivense.com/FN3HpDBqN34BlK46PTLOP6QBlZQ=/images/67b12cb52c504558aa5848a191972dac.jpg",
      price: "12.240 TL",
    },
  ];

  return (
    <>
      <Header />
      <CategoriesCardWrapper categories={homeCategories} />
      <RecomendCardWrapper recommended={recommendedItems} />
      <CampaignBanner image="https://img.vivense.com/H9JgCMbiw__MzghKACOXWksR8j4=/images/0f9a2ea223bc49828a9661cf633bdb3b.jpg" />
      <CategoriesCardWrapper categories={campaignFirst} />
      <CampaignCardWrapper
        data={bestSeller}
        title="HAFTANIN EN ÇOK SATANLARI"
      />
      <CampaignBanner image="https://img.vivense.com/_Y0DtZCoR_As9zOqtAwH-3fUFVM=/images/fa862230fad34436bacd622a39673bcd.gif" />
      <RegistraryBanner />
      <ProductsPage />
    </>
  );
}
