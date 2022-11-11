import React from "react";

export default function CampaignCard({ data, lenght }) {
  const imageStyle = {
    width: `calc(100% / 4 - 15px)`,
    height: `calc(100% / 4 - 15px )`,
  };

  return (
    <a href="#!" style={imageStyle}>
      <div className="card-container">
        <div className="category-card">
          <div className="category-card-header">
            <span>12.240 TL</span>
          </div>
          <div className="category-card-img">
            <img src={data.image} alt="" />
          </div>
          <div className="category-card-footer">
            <h5 className="footer-title">{data.name}</h5>
            {data.subTitle && <h5 className="sub-title">{data.subTitle}</h5>}
          </div>
        </div>
      </div>
    </a>
  );
}
