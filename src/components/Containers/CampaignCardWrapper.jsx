import React from "react";
import CampaignCard from "../Cards/CampaignCard";

export default function CampaignCardWrapper({ data, title }) {
  return (
    <>
      <h3 className="card-title"> {title} </h3>
      <div className="container">
        <div className="campaign-card-wrapper">
          {data.map((x, i) => (
            <CampaignCard key={x.id} data={x} lenght={data.length} />
          ))}
        </div>
      </div>
    </>
  );
}
