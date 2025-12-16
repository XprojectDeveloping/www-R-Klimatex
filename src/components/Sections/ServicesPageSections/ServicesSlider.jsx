import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { getMultiLang as ml } from "../../Language/translation/MultiLang.js";
import defaultImg from "../../../assets/img/default-image.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function ServicesSlider({ sliderData }) {
  const [t] = useTranslation("translation");

  return (
    <>
      <section className="px-[6rem]">
        <div className="flex items-center w-[100%] h-[100%]">
          <Swiper
            slidesPerView={0}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {sliderData &&
              sliderData?.map((item, index) => {
                return (
                  <SwiperSlide key={item?.id || index}>
                    <Link to={`/services/${item?.slug_az}`}>
                      <div className="services-bg-hov bg-[#ffffff] p-[2rem] h-[20rem] flex items-center justify-center flex-col cursor-pointer">
                        <img
                          className="w-full h-[80px] object-contain"
                          src={item?.src || defaultImg}
                          alt={t("servicesSliderImgAlt")}
                        />

                        <p className="mt-[4.1rem] text-[2rem] text-[#40A6E0]">
                          {ml(
                            item?.name_az || "",
                            item?.name_ru || "",
                            item?.name_en || ""
                          )}
                        </p>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section>
    </>
  );
}
export default ServicesSlider;
