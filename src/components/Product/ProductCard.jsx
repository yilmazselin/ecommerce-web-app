import React from "react";

function ProductCard() {
  return (
    <div className="product-card-wrapper">
      <div className="product-card-body">
        <img
          className="product-image"
          src="https://img.vivense.com/1920x1280/images/ea5f03f99e174eab94a274566a915fb0.jpg"
          alt=""
        />
        <div className="product-badge">
          <p className="first-badge">sadece vivense'de</p>
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
    </div>
  );
}

export default ProductCard;
