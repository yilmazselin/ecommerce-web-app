import React, { useState } from "react";
import Header from "../components/Header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Accordion from "../components/Accordion/Accordion";
import Footer from "../components/Footer/Footer";

function ProductDetail() {
  const accordionData = [
    {
      id: 0,
      title: "Ürün Özellikleri",
      description:
        "	Ürünün kapitonesinde 18 dns sünger kullanılmıştır. Ürün baza sandıklı, metal iskeletli, makaslı ve yatak olma özelliğine sahiptir. İki adet kırlent ürüne dahildir.",
    },
    {
      id: 1,
      title: "Teslimat ve Kurulum",
      description:
        "Bu ürünün paket hacmi 30 desi üzeri olduğu için, yasa gereği kargoyla bina kapısında teslim edilir.Bu ürünün teslimatı ücretsizdir.Ürün demonte olarak teslim edilir. Kurulumunu kolayca yapabilmen için de ihtiyacın olan tüm parçalar kurulum şemasıyla birlikte gönderilir.",
    },
    {
      id: 2,
      title: "Ödeme ve Taksit",
      description:
        "Bonus, World, Maximum, Axess, Paraf, Card Finans kredi kartları ile 2, 3, 4, 5, 6, 7, 8 ve 9 taksitle ödeme yapabilirsin.       3D Secure hizmeti ve dünyanın önde gelen ödeme sistemleri firması Masterpass altyapısı sayesinde güvenli ödeme sistemimizle gönül rahatlığıyla alışverişini yapabilirsin.Havale, kredi ve banka kartı, nakit, parçalı ödeme seçenekleriyle Vivense.com üzerinden ya da showrooma gelerek sipariş oluşturabilirsin.",
    },
    {
      id: 3,
      title: "Satış Sonrası Destek",
      description:
        "Uzun uzun düşünmene gerek yok! Eğer siparişinden sonraki 3 gün içinde kararını değiştirirsen, siparişini tamamen ücretsiz olarak iptal edebilirsin. Ürünü teslim ettikten sonra da biz hep yanındayız. Eğer teslimattan sonra seni memnun etmeyen bir durum olursa 14 gün içinde bize haber vermen yeterli. Senin için çözüm sürecini hemen başlatır, en kısa sürede memnuniyetini sağlarız. Bu ürünü 2 yıl boyunca Vivense garantisi altında gönül rahatlığıyla kullanabilirsin.",
    },
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [data, setData] = useState(accordionData);

  return (
    <>
      <Header />
      <div className="container ">
        <div className="product-details-wrapper container-controller ">
          <div className="product-detail-slider">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img src="https://img.vivense.com/1920x1280/images/93f466f592ff42179b2b4a1b754953b0.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://img.vivense.com/1920x1280/images/0162aeb733464e0d82f782c6b78978cc.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://img.vivense.com/1920x1280/images/dfd1d395d4f542f49bd96c0ca382fb63.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://img.vivense.com/1920x1280/images/b2973a8d1d194acabe308de2d085fd82.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://img.vivense.com/1920x1280/images/ba326f204c294b5caa16e41fb1b3b9ac.jpg" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://img.vivense.com/1920x1280/images/93f466f592ff42179b2b4a1b754953b0.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://img.vivense.com/1920x1280/images/0162aeb733464e0d82f782c6b78978cc.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://img.vivense.com/1920x1280/images/dfd1d395d4f542f49bd96c0ca382fb63.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://img.vivense.com/1920x1280/images/b2973a8d1d194acabe308de2d085fd82.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://img.vivense.com/1920x1280/images/ba326f204c294b5caa16e41fb1b3b9ac.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="product-detail-card">
            <div className="card-title">
              <div className="product-detail-price">
                <span>5.469 TL</span>
              </div>
            </div>
            <div className="card-body">
              <div className="product-table-detail">
                <ul className="list-item-wrapper">
                  <li className="list-item">
                    <p>Takım İçeriği</p>
                    <p>Fiyat</p>
                  </li>
                  <li className="list-item">
                    <p>Berjer Bej</p>
                    <p>1x1700 TL</p>
                  </li>
                  <li className="list-item">
                    <p>Üçlü Koltuk Lacivert</p>
                    <p>1x3769 TL</p>
                  </li>
                  <li className="list-item">
                    <p>Toplam</p>
                    <p>5.469 TL</p>
                  </li>
                </ul>
                <div className="add-basket-btn">
                  <button>Sepete Ekle</button>
                </div>
              </div>
            </div>

            <div className="card-footer"></div>
          </div>
        </div>
      </div>
      <h3 className="product-name">madrid koltuk takımı</h3>

      <div className="container container-controller">
        {data.map((element, index) => (
          <Accordion key={element.id} data={element} /> //! döngünün içerisindeki her elemanı 1.parametre temsil eder
        ))}
      </div>

      <Footer />
    </>
  );
}

export default ProductDetail;
