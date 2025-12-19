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
      <section className="px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] py-[6rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem]">
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={0}
          breakpoints={{
            566: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
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
                  <div className="p-[3rem] lg:p-[2rem]">
                    <Link to={"/distribution"} className="brand-hov">
                      <img
                        className="w-full h-[45px] lg:h-[35px] object-contain grayscale"
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
