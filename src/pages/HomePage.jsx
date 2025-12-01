import homePageTelIco from "../assets/img/body/homePageTel-ico.svg";
import homePageServicesBg from "../assets/img/body/homepage-services-bg.png";
import { useTranslation } from "react-i18next";
import useGlobalFech from "../components/GlobalAPI/GlobalFech";
import { getMultiLang as ml } from "../components/Language/translation/MultiLang.js";
import "swiper/css";
import "swiper/css/pagination";
import HomePageBanner from "../components/Sections/HomePageSections/HomePageBanner.jsx";
import HoomePageAbout from "../components/Sections/HomePageSections/HomePageAbout.jsx";
import HomePageServices from "../components/Sections/HomePageSections/HomePageServices.jsx";
import ServicesSlider from "../components/Banner/ServicesSlider.jsx";
import ProjectPageSection from "../components/Sections/ProjectPageSections/ProjectPageSection.jsx";
import DistributionBrand from "../components/Sections/DistributionPageSections/DistributionBrand.jsx";
function HomePage() {
  const [t] = useTranslation("translation");
  const { data } = useGlobalFech();
  return (
    <>
      <main>
        {/* HomePage banner section */}

        <HomePageBanner dataBanner={data?.homebanner} />
        {/* HomePage about section */}

        <HoomePageAbout
          aboutTextData={ml(
            data?.options?.misiya?.missiya_text_az,
            data?.options?.misiya?.missiya_text_ru,
            data?.options?.misiya?.missiya_text_en
          )}
          text={"+994 51 325 13 25"}
          aboutDataImgTel={homePageTelIco}
          aboutDataimg={data?.options?.misiya?.missiya_image}
          h2Title={t("homePageH2")}
          h3Title={t("homePageH3")}
          pText={t("homePageP2")}
        />

        {/* HomePage services, project section */}

        <div className="bg-[#EFEFEF]">
          <HomePageServices
            projectDataImg={homePageServicesBg}
            h2Title={t("homePageServicesH2")}
            pText={t("homePageServicesP")}
          />

          <ServicesSlider sliderData={data?.service} />

          <ProjectPageSection
            projectData={data?.layihe}
            h2Title={t("projectPageH2")}
            buttonText={t("projectButtonText")}
          />

          <DistributionBrand distributionData={data?.brend} />
        </div>
      </main>
    </>
  );
}
export default HomePage;
