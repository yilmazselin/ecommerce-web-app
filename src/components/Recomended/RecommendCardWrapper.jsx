import React from "react";
import RecomendCard from "./RecommendCard";

export default function RecomendCardWrapper({ recommended }) {
  return (
    <>
      <div className="container">
        <h3 className="recommended-title">SENİN İÇİN SEÇTİKLERİMİZ</h3>
        <div className="recommended-card-wrapper">
          {recommended.map((x, i) => (
            <RecomendCard key={x.id} data={x} lenght={recommended.length} />
          ))}
        </div>
      </div>
    </>
  );
}
