import { useParams } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import { useTranslation } from "react-i18next";
import defaultImg from "../assets/img/default-image.jpg";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import PreLoader from "../components/PreLoader/PreLoader.jsx";
function ProductionSingle() {
  const [t] = useTranslation("translation");
  const { slug } = useParams();
  const { data } = useGlobalFech();
  const curretItem = data?.istehsalat?.find((item) => item?.slug_az === slug);
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
              {/* Production Single banner section */}
              {data?.options?.pagetopbanner && (
                <Banner
                  img={data?.options?.pagetopbanner || defaultImg}
                  text={t("ProductionPageBanner")}
                />
              )}

              {/* Production Single items section */}

              <section className="bg-[#F0F0F0]">
                <Tabs>
                  <div className="bg-[#F0F0F0]">
                    <TabList className="flex px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] py-[6rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem]">
                      {curretItem?.products &&
                        curretItem?.products?.map((item) => {
                          return (
                            <Tab
                              key={item.id}
                              _selected={{ color: "#ffffff", bg: "#3EA3DC" }}
                              className="bg-[#ffffff] px-[3rem] py-[1rem] text-[1.5rem]"
                            >
                              {ml(item?.name_az, item?.name_ru, item?.name_en)}
                            </Tab>
                          );
                        })}
                    </TabList>
                  </div>

                  <TabPanels>
                    {curretItem?.products &&
                      curretItem?.products?.map((item) => {
                        return (
                          <TabPanel key={item?.id}>
                            <div className="flex lg:flex-col justify-between bg-[#ffffff] px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] py-[6rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem]">
                              <div className="flex flex-col gap-[1.5rem]">
                                <p className="text-[1.8rem] text-[#000000] font-normal">
                                  {t("ProductionSinglePageMaterial")}
                                  {" - "}
                                  {ml(
                                    item?.material_az || "",
                                    item?.material_ru || "",
                                    item?.material_en || ""
                                  )}
                                </p>
                                <p className="text-[1.8rem] text-[#000000] font-normal">
                                  {t("ProductionSinglePageColor")}
                                  {" - "}
                                  {ml(
                                    item?.reng_az || "",
                                    item?.reng_ru || "",
                                    item?.reng_en || ""
                                  )}
                                </p>
                                <p className="text-[1.8rem] text-[#000000] font-normal">
                                  {t("ProductionSinglePageUsage")}
                                  {" - "}
                                  {ml(
                                    item?.istifade_az || "",
                                    item?.istifade_ru || "",
                                    item?.istifade_en || ""
                                  )}
                                </p>
                                <p className="text-[1.8rem] text-[#000000] font-normal">
                                  {t("ProductionSinglePageFeatures")}
                                  {" - "}
                                  {ml(
                                    item?.xususiyyetler_az || "",
                                    item?.xususiyyetler_ru || "",
                                    item?.xususiyyetler_en || ""
                                  )}
                                </p>
                              </div>
                              <div>
                                <img
                                  src={item?.src || defaultImg}
                                  alt={ml(
                                    item?.alt_az || "",
                                    item?.alt_ru || "",
                                    item?.alt_en || ""
                                  )}
                                />
                              </div>
                            </div>

                            <div className="flex flex-row md:flex-col items-center px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] py-[6rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem] gap-[2rem]">
                              <div>
                                <img
                                  src={item?.image_2 || defaultImg}
                                  alt={ml(
                                    item?.alt_az || "",
                                    item?.alt_ru || "",
                                    item?.alt_en || ""
                                  )}
                                />
                              </div>
                              <div>
                                <img
                                  src={item?.image_1 || defaultImg}
                                  alt={ml(
                                    item?.alt_az || "",
                                    item?.alt_ru || "",
                                    item?.alt_en || ""
                                  )}
                                />
                              </div>
                            </div>

                            <div className="bg-[#ffffff] px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] py-[6rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem] gap-[2rem]">
                              <p className="text-[2rem] text-[#000000] font-normal leading-[100%] pb-[4rem]">
                                {ml(
                                  item?.iki_qanadli_barmaqliq_az || "",
                                  item?.iki_qanadli_barmaqliq_ru || "",
                                  item?.iki_qanadli_barmaqliq_en || ""
                                )}
                              </p>

                              <img
                                src={item?.image_4}
                                alt="qanadli_barmaqliq"
                              />
                            </div>

                            <div className="px-[6rem] lg:px-[3rem] md:px-[2.5rem] sm:px-[1.5rem] py-[6rem] lg:py-[3rem] md:py-[2.5rem] sm:py-[1.5rem]">
                              <p className="text-[2rem] text-[#000000] font-normal leading-[100%] pb-[4rem]">
                                {ml(
                                  item?.barmaqliq_secimi_cedveli_az || "",
                                  item?.barmaqliq_secimi_cedveli_ru || "",
                                  item?.barmaqliq_secimi_cedveli_en || ""
                                )}
                              </p>

                              <img
                                src={item?.image_5}
                                alt="barmaqliq_secimi_cedveli"
                              />
                            </div>
                          </TabPanel>
                        );
                      })}
                  </TabPanels>
                </Tabs>
              </section>
            </m.div>
          </main>
        </>
      )}
    </>
  );
}
export default ProductionSingle;
