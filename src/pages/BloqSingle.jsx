import Banner from "../components/Banner/Banner";
import defaultImg from "../assets/img/default-image.jpg";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import useGlobalFech from "../components/GlobalAPI/GlobalFech.jsx";
import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import PreLoader from "../components/PreLoader/PreLoader.jsx";
function BloqSingle() {
  const { data } = useGlobalFech();
  const [t] = useTranslation("translation");
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
              {data?.options?.pagetopbanner && (
                <Banner
                  img={data?.options?.pagetopbanner || defaultImg}
                  text={t("BloqPageBanner")}
                />
              )}

              <section className="px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] py-[6rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem]">
                {data?.blogall &&
                  data?.blogall?.map((item) => {
                    return (
                      <div key={item?.id}>
                        <img
                          src={item?.banner || defaultImg}
                          alt="banner-img"
                        />

                        <div
                          className="text-[3.5rem] lg:text-[2.5rem] text-[#000000] pt-[3rem] font-semibold"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              ml(
                                item?.title_az || "",
                                item?.title_ru || "",
                                item?.title_en || ""
                              )
                            ),
                          }}
                        />

                        <div
                          className="text-[1.9rem] lg:text-[1.5rem] text-[#000000] font-normal"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              ml(
                                item?.text_az || "",
                                item?.text_ru || "",
                                item?.text_en || ""
                              )
                            ),
                          }}
                        />
                      </div>
                    );
                  })}
              </section>
            </m.div>
          </main>
        </>
      )}
    </>
  );
}
export default BloqSingle;
