import React from "react";
import { useState } from "react";

function Accordion({ data }) {
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    setStatus(!status);
  };

  return (
    <>
      <div className="accordion">
        <div className="accordion-header" onClick={handleClick}>
          <h5>{data.title}</h5>
          <span>+</span>
        </div>
        <div className={`accordion-body ${status === true ? "opened" : ""}`}>
          <p>{data.description}</p>
        </div>
      </div>
    </>
  );
}

export default Accordion;
