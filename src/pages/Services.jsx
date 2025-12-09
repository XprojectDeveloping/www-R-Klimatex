import { useTranslation } from "react-i18next";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import Banner from "../components/Banner/Banner.jsx";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import { NavLink, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Tabs, TabList } from "@chakra-ui/react";
import DOMPurify from "dompurify";
import defaultImg from "../assets/img/default-image.jpg";
function Services() {
  const [t] = useTranslation("translation");
  const { data } = useGlobalFech();
  const { slug } = useParams();
  const curretItem = data?.service?.find((item) => item?.slug_az === slug);
  return (
    <>
      <main>
        <section>
          {/*Services banner section */}
          {data?.options?.pagetopbanner && (
            <Banner
              img={data?.options?.pagetopbanner || defaultImg}
              text={t("ServicesPageBanner")}
            />
          )}
        </section>

        <div className="bg-[#EFEFEF]">
          {/*Services slider and tab section */}
          <section>
            <div className="px-[6rem] py-[6rem]">
              {/*Services slider section */}
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
                    slidesPerView: 7,
                    spaceBetween: 20,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {data?.service &&
                  data?.service?.map((item) => {
                    return (
                      <SwiperSlide key={item?.id}>
                        <NavLink
                          className={"services-box"}
                          to={`/services/${item?.slug_az}`}
                        >
                          <div className="services-bg-hov bg-[#ffffff] p-[2rem] h-[20rem] flex items-center justify-center flex-col cursor-pointer">
                            <img
                              className="w-full h-[80px] object-contain"
                              src={item?.src}
                              alt="card"
                            />

                            <p className="mt-[4.1rem] text-center text-[1.5rem] text-[#40A6E0]">
                              {ml(item?.name_az, item?.name_ru, item?.name_en)}
                            </p>
                          </div>
                        </NavLink>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>

              {/*Services tab section */}
              <Tabs className="mt-[6rem]">
                <TabList>
                  <Swiper>
                    {curretItem?.products &&
                      curretItem?.products?.map((item) => {
                        return (
                          <SwiperSlide key={item.id}>
                            <div className="flex flex-row gap-[4rem]">
                              <div className="flex flex-col">
                                <h2 className="text-[4rem] text-[#000000] leading-[100%] font-semibold pb-[4.3rem]">
                                  {ml(
                                    item?.name_az,
                                    item?.name_ru,
                                    item?.name_en
                                  )}
                                </h2>
                                <div
                                  className="text-[1.4rem] text-[#000000] font-normal"
                                  dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(
                                      ml(
                                        item?.text_az,
                                        item?.text_ru,
                                        item?.text_en
                                      )
                                    ),
                                  }}
                                />
                              </div>
                              <img
                                src={item?.src || defaultImg}
                                alt={ml(
                                  item?.alt_az || "",
                                  item?.alt_ru || "",
                                  item?.alt_en || ""
                                )}
                              />
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabList>
              </Tabs>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
export default Services;
