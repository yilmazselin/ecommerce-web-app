import React from "react";

export default function HeaderNav() {
  return (
    <>
      <div className="container">
        <div className="header-nav-menu justify-content-space">
          <ul className="d-flex">
            <li>
              <a href="">Dekorasyon</a>
            </li>
            <li>
              <a href="">Dekorasyon</a>
            </li>
            <li>
              <a href="">Dekorasyon</a>
            </li>
            <li>
              <a href="">Dekorasyon</a>
            </li>
            <li>
              <a href="">Dekorasyon</a>
            </li>
            <li>
              <a href="">Dekorasyon</a>
            </li>
            <li>
              <a href="">Dekorasyon</a>
            </li>
            <li>
              <a href="">Dekorasyon</a>
            </li>
            <li>
              <a href="">Dekorasyon</a>
            </li>
            <li>
              <a href="">Dekorasyon</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-nav-img">
        <img
          src={require("../../assets/images/category-banner.png")}
          alt=""
          srcset=""
        />
      </div>
    </>
  );
}
