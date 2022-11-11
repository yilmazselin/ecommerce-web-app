import React from "react";
import HeaderNav from "../HeaderNav/HeaderNav";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="header-left">
              <ul className="d-flex">
                <li>
                  <a href="#">İç Mimarlık Hizmetleri</a>
                </li>
                <li>
                  <a href="">Showroomlar</a>
                </li>
                <li>
                  <a href="">Mobilya ve Dekorasyon Hizmeti</a>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <ul className="d-flex">
                <li>
                  <a href="">Kampanyalar</a>
                </li>
                <li>
                  <a href="">En Yeniler</a>
                </li>
                <li>
                  <a href="">Destek Merkezi</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="middle-header d-flex justify-content-between">
          <div className="middle-header-logo">
            <a href="/" className="middle-header-img">
              <img
                src="https://cdn.vivense.com/images/header/logo/Vivense-logotype-white-new.svg"
                alt=""
              />
            </a>
          </div>
          <div className="shorcut-icons">
            <ul className="d-flex">
              <li>
                <img src={require("../../assets/images/user.png")} alt="" />
                <a href="">Giriş Yap</a>
              </li>
              <li>
                <img src={require("../../assets/images/user.png")} alt="" />
                <a href="">Favorilerim</a>
              </li>
              <li>
                <img src={require("../../assets/images/user.png")} alt="" />
                <a href="">Sepetim</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <HeaderNav />
    </>
  );
}
export default Header;
