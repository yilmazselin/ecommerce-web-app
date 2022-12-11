import React from "react";

export default function RegistraryBanner() {
  return (
    <>
      <div className="registrary-wrapper">
        <div className="container h-100">
          <div className="registrary-controller d-flex h-100">
            <div className="registrary-left-section">
              <div className="registrary-text">
                <div className="registrary-title">
                  <h3>Kampanyalardan Haberdar Ol! </h3>
                </div>
                <div className="registrary-content">
                  <p>
                    Hemen E-posta listemize kayıt ol, en güncel kampanyalar,
                    yenilikler ve duyuruları ilk öğrenen sen ol. Kampanyalardan
                    haberdar olmak için Ticari Elektronik İleti almayı onaylıyor
                    olacaksın. Ayrıntılı bilgi için Müşteri Aydınlatma Metnini
                    inceleyebilirsin.
                  </p>
                </div>
              </div>
            </div>
            <div className="registrary-right-section d-flex">
              <div className="e-mail-input">
                <input type="text" placeholder="E-Posta Adresi" />
              </div>
              <button className="confirm-button" type="submit">
                ONAYLA
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
