import React from "react";
import CategoriesCard from "./CategoriesCard";

export default function CategoriesCardWrapper({ categories }) {
  return (
    <>
      <h3 className="card-title">KEYİFLİ SOFRALARDA EN İYİ FİYATLAR</h3>
      <div className="container">
        <div className="categories-card-wrapper">
          {categories.map((x, i) => (
            <CategoriesCard key={x.id} data={x} lenght={categories.length} />
          ))}
        </div>
      </div>
    </>
  );
}
