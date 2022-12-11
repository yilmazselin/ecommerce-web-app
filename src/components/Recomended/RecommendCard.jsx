import React from "react";

export default function RecomendCard({ data, lenght }) {
  const imageStyle = {
    width: `calc(100% / ${lenght})`,
    height: `calc(100% / ${lenght})`,
  };
  return (
    <div style={imageStyle}>
      <div className="recommended-container">
        <div className="recommended-card">
          <div className="recommended-card-img">
            <img src={data.img} alt="" />
            <div className="recommended-item-title">
              <h5> {data.name} </h5>
            </div>
            <div className="recommended-item-price">
              {" "}
              {data.netPrice && <h5 className="net-price">{data.netPrice}</h5>}
              {data.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
