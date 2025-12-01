import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
function DistributionBrand({ distributionData }) {
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
            distributionData?.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="p-[3rem]">
                    <img
                      className="w-full h-[45px] object-contain grayscale "
                      src={item?.src}
                      alt="brend"
                    />
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
