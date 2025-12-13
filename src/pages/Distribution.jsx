import { useTranslation } from "react-i18next";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import defaultImg from "../assets/img/default-image.jpg";
import Banner from "../components/Banner/Banner";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import DOMPurify from "dompurify";
import DistributionBrand from "../components/Sections/DistributionPageSections/DistributionBrand.jsx";
function Distribution() {
  const [t] = useTranslation("translation");
  const { data } = useGlobalFech();
  const distributionFullData = data?.distrubition;
  return (
    <>
      <main>
        <section>
          {data?.options?.pagetopbanner && (
            <Banner
              img={data?.options?.pagetopbanner || defaultImg}
              text={t("DistributionPageBanner")}
            />
          )}
        </section>

        <section>
          <Tabs variant="unstyled" className="my-[6rem] mx-[6rem]">
            <TabList className="!grid grid-cols-12 gap-[2rem]">
              {distributionFullData &&
                distributionFullData.map((item) => {
                  return (
                    <Tab
                      className="bg-[#f6f6f6] col-span-2"
                      _selected={{
                        boxShadow:
                          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                      }}
                      key={item?.id}
                    >
                      <div className="flex justify-center items-center py-[1.5rem]">
                        <img
                          className="w-auto h-[3rem] object-cover"
                          src={item?.src}
                          alt={item?.id}
                        />
                      </div>
                    </Tab>
                  );
                })}
            </TabList>

            <TabPanels className="my-[3rem]">
              {distributionFullData &&
                distributionFullData?.map((itemOne) => {
                  return (
                    <TabPanel className="!p-0" key={itemOne?.id}>
                      <Tabs variant="unstyled">
                        <TabList>
                          {itemOne?.sub_categories.map((itemTwo) => {
                            return (
                              <Tab
                                className="bg-[#f6f6f6] px-[1rem] py-[1.2rem] me-3"
                                _selected={{ bg: "#3EA3DC", color: "white" }}
                                key={itemTwo?.id}
                              >
                                <h3 className="text-[1.5rem]">
                                  {ml(
                                    itemTwo?.name_az || "",
                                    itemTwo?.name_ru || "",
                                    itemTwo?.name_en || ""
                                  )}
                                </h3>
                              </Tab>
                            );
                          })}
                        </TabList>

                        <TabPanels className="mt-[1rem]">
                          {itemOne?.sub_categories?.map((sub) => (
                            <TabPanel key={sub.id} className="!p-0">
                              {sub?.products?.map((item) => (
                                <div
                                  className="grid grid-cols-12 gap-[5rem] py-[5rem] items-center even:bg-[#f6f6f6] even:flex even:flex-row-reverse even:justify-evenly"
                                  key={item.id}
                                >
                                  <div className="col-span-8">
                                    <h3 className="text-[4rem] text-[#000000] pb-[2.5rem] font-semibold leading-100%">
                                      {ml(
                                        item?.title_az || "",
                                        item?.title_ru || "",
                                        item?.title_en || ""
                                      )}
                                    </h3>
                                    <div
                                      className="text-[2.3rem] text-[#000000] font-normal"
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
                                  <div className="col-span-4">
                                    <img
                                      className="h-[400px] w-full object-contain"
                                      src={item.src || defaultImg}
                                      alt={ml(
                                        item?.title_az || "",
                                        item?.title_ru || "",
                                        item?.title_en || ""
                                      )}
                                    />
                                  </div>
                                </div>
                              ))}
                            </TabPanel>
                          ))}
                        </TabPanels>
                      </Tabs>
                    </TabPanel>
                  );
                })}
            </TabPanels>
          </Tabs>
        </section>

        <section className="bg-[#EFEFEF]">
          {data?.brend && <DistributionBrand distributionData={data?.brend} />}
        </section>
      </main>
    </>
  );
}
export default Distribution;
