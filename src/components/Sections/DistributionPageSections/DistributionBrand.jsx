import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import defaultImg from "../../../assets/img/default-image.jpg";
import { useTranslation } from "react-i18next";
function DistributionBrand({ distributionData }) {
  const [t] = useTranslation("translation");
  return (
    <>
      <section className="px-[6rem] py-[8rem]">
        <Swiper
          slidesPerView={0}
          loop={true}
          spaceBetween={0}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          modules={[Pagination]}
          className="mySwiper bg-[white] rounded-[0.625em]"
        >
          {distributionData &&
            distributionData?.map((item, index) => {
              return (
                <SwiperSlide key={item.id || index}>
                  <div className="p-[3rem]">
                    <Link to={"/distribution"} className="brand-hov">
                      <img
                        className="w-full h-[45px] object-contain grayscale"
                        src={item?.src || defaultImg}
                        alt={t("distributionBrandImgAlt")}
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </section>
    </>
  );
}
export default DistributionBrand;
