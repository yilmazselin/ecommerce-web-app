import React from "react";
import Header from "../components/Header/Header";
import ProductCard from "../components/Product/ProductCard";

export default function ProductsPage() {
  const productsData = [
    {
      id: 0,
      name: "Ürün Bir",
      image: "image url",
      price: "10",
    },
    {
      id: 1,
      name: "Ürün 2",
      image: "image url",
      price: "10",
    },
  ];
  return (
    <>
      <Header />
      <div className="container">
        <div className="product-cards">
          {productsData.map((x) => (
            <ProductCard key={x.id} />
          ))}
        </div>
      </div>
    </>
  );
}
