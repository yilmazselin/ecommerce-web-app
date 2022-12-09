import React from "react";
import Header from "../components/Header/Header";
import ProductCard from "../components/Product/ProductCard";

export default function ProductsPage() {
  const productsData = [
    {
      id: 0,
      name: "Ürün Bir",
      image:
        "https://img.vivense.com/1920x1280/images/ea5f03f99e174eab94a274566a915fb0.jpg",
      price: "10",
    },
    {
      id: 1,
      name: "Ürün 2",
      image:
        "https://img.vivense.com/1920x1280/images/ea5f03f99e174eab94a274566a915fb0.jpg",
      price: "10",
    },
    {
      id: 2,
      name: "Ürün 2",
      image:
        "https://img.vivense.com/1920x1280/images/ea5f03f99e174eab94a274566a915fb0.jpg",
      price: "10",
    },
    {
      id: 3,
      name: "Ürün 2",
      image:
        "https://img.vivense.com/1920x1280/images/ea5f03f99e174eab94a274566a915fb0.jpg",
      price: "10",
    },
    {
      id: 4,
      name: "Ürün 2",
      image:
        "https://img.vivense.com/1920x1280/images/ea5f03f99e174eab94a274566a915fb0.jpg",
      price: "10",
    },
    {
      id: 5,
      name: "Ürün 2",
      image:
        "https://img.vivense.com/1920x1280/images/ea5f03f99e174eab94a274566a915fb0.jpg",
      price: "10",
    },
    {
      id: 6,
      name: "Ürün 2",
      image:
        "https://img.vivense.com/1920x1280/images/ea5f03f99e174eab94a274566a915fb0.jpg",
      price: "10",
    },
    {
      id: 7,
      name: "Ürün 2",
      image:
        "https://img.vivense.com/1920x1280/images/ea5f03f99e174eab94a274566a915fb0.jpg",
      price: "10",
    },
  ];
  return (
    <>
      <Header />
      <div className="container">
        <div className="product-sort">
          <select>
            <option>Sırala</option>
            <option>En Düşük Fiyat</option>
            <option>En Yüksek Fiyat</option>
            <option>En Yeniler</option>
          </select>
        </div>

        <div className="product-cards">
          {productsData.map((x) => (
            <ProductCard data={x} key={x.id} />
          ))}
        </div>
      </div>
    </>
  );
}
