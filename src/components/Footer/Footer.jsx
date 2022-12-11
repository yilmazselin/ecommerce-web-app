import React from "react";
import Button from "../Button";

function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="container footer-container">
          <div className="footer-left-side">
            <a href="#">
              <div className="footer-list">
                <ul className="list-title">
                  BİZİ TANI
                  <li>Showroomlar</li>
                  <li>Biz Kimiz?</li>
                  <li>Kariyer</li>
                  <li>Basın</li>
                  <li>Taşıyıcı Ol</li>
                  <li>Tedarikçi Ol</li>
                  <li>Satış Noktası Ol</li>
                </ul>
                <ul className="list-title">
                  İLHAM - FİKİR
                  <li>İç Mimar Hizmeti</li>
                  <li>Vivense Blog</li>
                  <li>Vivense Collectiton</li>
                  <li>Yurt Dışına Satış</li>
                  <li>Mobilya Hizmeti</li>
                  <li>Dekorasyon</li>
                </ul>
                <ul className="list-title">
                  KATEGORİLER
                  <li>Kampanyalar</li>
                  <li>Yatak Odası</li>
                  <li>Köşe Koltuk</li>
                  <li>Sehpa</li>
                  <li>Yemek Odası</li>
                  <li>Baza</li>
                  <li>Çalışma Odası</li>
                </ul>
                <ul className="list-title">
                  YARDIM - DESTEK
                  <li>Destek Merkezi</li>
                  <li>0850 111 11 11</li>
                  <li>Sipariş Takibi</li>
                </ul>
                <ul className="list-title">
                  UYGULAMAMIZI İNDİRİN
                  <Button className="footer-app-box">
                    <img src="https://cdn.vivense.com/images/icon/vivense-footer-app-store-icon.svg" />
                    <div>
                      <p>APP GALLERY</p>
                      <p>'den indirebilirsiniz</p>
                    </div>
                  </Button>
                  <Button className="footer-app-box">
                    <img src="https://cdn.vivense.com/images/icon/vivense-footer-play-store-icon.svg" />
                    <div>
                      <p>APP GALLERY</p>
                      <p>'den indirebilirsiniz</p>
                    </div>
                  </Button>
                  <Button className="footer-app-box">
                    <img src="https://cdn.vivense.com/images/icon/vivense-footer-app-gallery-icon.svg" />
                    <div>
                      <p>APP GALLERY</p>
                      <p>'den indirebilirsiniz</p>
                    </div>
                  </Button>
                </ul>
              </div>
            </a>
          </div>
          <div className="footer-right-side">
            <img src="https://cdn.vivense.com/images/icon/footer_vivense_icon.svg" />
            <p className="footer-main-title">
              VİVENSE’NİN RENKLİ DÜNYASINA KATIL!
            </p>
            <p className="footer-subtitle">
              En yeni dekorasyon trendleri, kampanyalar, ve sana özel
              sürprizler...
            </p>
            <Button className="footer-register-btn">Hemen Üye Ol</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
