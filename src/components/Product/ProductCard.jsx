import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ data }) {
  return (
    <Link to={`/products/detail/${data.id}`} className="product-card-wrapper">
      <div className="product-card-body">
        <img className="product-image" src={data.image} alt="" />
        <div className="product-badge">
          <p className="first-badge">
            sadece <span>vivense'de</span>
          </p>
          <div className="second-badge">
            <img
              src="https://cdn.vivense.com/images/badges/vvns-high-score-badge.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="product-card-footer">
        <div className="product-title">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="product-price">
          <span>5.469 TL</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
