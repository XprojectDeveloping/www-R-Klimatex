import { useTranslation } from "react-i18next";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import Banner from "../components/Banner/Banner";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import { Link } from "react-router-dom";
import defaultImg from "../assets/img/default-image.jpg";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import PreLoader from "../components/PreLoader/PreLoader.jsx";
function Production() {
  const [t] = useTranslation("translation");
  const { data } = useGlobalFech();
  const [loading, setLoading] = useState(true);
  useEffect(() => {}, [
    setTimeout(() => {
      setLoading(false);
    }, 2000),
  ]);
  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <main>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              {/* Production banner section */}
              {data?.options?.pagetopbanner && (
                <Banner
                  img={data?.options?.pagetopbanner || defaultImg}
                  text={t("ProductionPageBanner")}
                />
              )}
              {/* Production items section */}
              <section className="px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] py-[6rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem] bg-[#F0F0F0]">
                <div className="flex flex-row sm:flex-col gap-[5rem]">
                  {data?.istehsalat &&
                    data?.istehsalat?.map((item) => {
                      return (
                        <div
                          className="flex flex-col items-center gap-[2.9rem]"
                          key={item.id}
                        >
                          <img
                            src={item?.src || defaultImg}
                            alt={
                              ml(item?.alt_az, item?.alt_ru, item?.alt_en) || ""
                            }
                          />

                          <Link
                            to={`/production/s/${item?.id}/${item?.slug_az}`}
                            className="product-hov text-center text-[1.5rem] text-[#000000] font-normal leading-[100%] bg-[#ffffff] px-[3.7rem] py-[1.8rem]"
                          >
                            {ml(item?.name_az, item?.name_en, item?.name_ru)}
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </section>
            </m.div>
          </main>
        </>
      )}
    </>
  );
}

export default Production;
