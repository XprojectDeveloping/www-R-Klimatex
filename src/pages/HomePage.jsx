import homePageTelIco from "../assets/img/body/homePageTel-ico.svg";
import homePageServicesBg from "../assets/img/body/homepage-services-bg.png";
import defaultImg from "../assets/img/default-image.jpg";
import { useTranslation } from "react-i18next";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import HomePageBanner from "../components/Sections/HomePageSections/HomePageBanner.jsx";
import HomePageServices from "../components/Sections/HomePageSections/HomePageServices.jsx";
import ServicesSlider from "../components/Sections/ServicesPageSections/ServicesSlider.jsx";
import ProjectPageSection from "../components/Sections/ProjectPageSections/ProjectPageSection.jsx";
import DistributionBrand from "../components/Sections/DistributionPageSections/DistributionBrand.jsx";
import useGlobalFech from "../components/GlobalAPI/GlobalFech.jsx";
import HomePageAbout from "../components/Sections/HomePageSections/HomePageAbout.jsx";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import PreLoader from "../components/PreLoader/PreLoader.jsx";
function HomePage() {
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
              {/* HomePage banner section */}

              {data?.homebanner && (
                <HomePageBanner dataBanner={data?.homebanner || defaultImg} />
              )}

              {/* HomePage about section */}

              {data?.options?.misiya && (
                <HomePageAbout
                  aboutTextData={ml(
                    data?.options?.misiya?.missiya_text_az || "",
                    data?.options?.misiya?.missiya_text_ru || "",
                    data?.options?.misiya?.missiya_text_en || ""
                  )}
                  aboutDataImgTel={homePageTelIco}
                  aboutDataimg={
                    data?.options?.misiya?.missiya_image || defaultImg
                  }
                  aboutDataTel={data?.options?.options?.tel2 || ""}
                  h2Title={t("homePageH2")}
                  h3Title={t("homePageH3")}
                  pText={t("homePageP2")}
                />
              )}

              {/* HomePage services, project section */}

              <div className="bg-[#EFEFEF]">
                <HomePageServices
                  projectDataImg={homePageServicesBg}
                  h2Title={t("homePageServicesH2")}
                  pText={t("homePageServicesP")}
                />

                <div className="mt-[-10rem] md:mt-[-5rem] sm:mt-[2rem] mb-[14rem] lg:mb-[6rem] md:mb-[4rem] sm:mb-[2rem]">
                  {data?.service && (
                    <ServicesSlider sliderData={data?.service} />
                  )}
                </div>

                {data?.layihe && (
                  <ProjectPageSection
                    projectData={data?.layihe}
                    h2Title={t("projectPageH2")}
                    buttonText={t("projectButtonText")}
                  />
                )}

                {data?.brend && (
                  <DistributionBrand distributionData={data?.brend} />
                )}
              </div>
            </m.div>
          </main>
        </>
      )}
    </>
  );
}
export default HomePage;
